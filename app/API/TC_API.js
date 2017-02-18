'use strict';

const http = require('http');

// LOGGER API
const db = require('./db_connect'),
    squel = require('squel');

const SPELL_CACHE = {},
    wowheadSpellNameRegexp = /<h1.*class=".*heading-size-1.*">(.*)<\/h1>/gi;

const globalQueryConfig = {
    replaceSingleQuotes: true,
    singleQuoteReplacement: "\\'",
    autoQuoteTableNames: true,
    autoQuoteFieldNames: true
};

function getUpdateQuery(tableName, whereCondition, currentRow, newRow, callback) {

    var key,
        diff = false,
        query = squel.update(globalQueryConfig);

    query.table(tableName);

    for (key in currentRow) {
        if (currentRow[key] !== newRow[key]) {

            // Convert numeric values
            if (!isNaN(currentRow[key]) && !isNaN(newRow[key]) && newRow[key] != "") {
                newRow[key] = Number(newRow[key]);
            }

            query.set(key, newRow[key]);
            diff = true;
        }
    }

    if (!diff) {
        console.log("[INFO] There are no `" + tableName + "` changes");
        result = "";
    }

    query.where(whereCondition);

    let result = query.toString();

    if (result !== "") {
        db.query(result, function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }
    else {
        return callback(result);
    }

};

/**
 * Returns a promise of an object with spell id and spell name. 
 * The spell id is used to make a GET request to wowhead and extract the name of the spell
 * with the matching id from the html page. If the request has an error, the promise is rejected.
 * If the spell is not matched in the html, the promise is resolve with null.
 * Successful requests to wowhead are cached.
 * @param {string} spell_id - the wowhead id of the spell to search for
 * @returns {Promise.<{ id: string, name: string }>}
 */
function search_spell(spell_id) {
    if (SPELL_CACHE[spell_id] !== undefined) {
        return Promise.resolve(SPELL_CACHE[spell_id]);
    }

    const options = {
        hostname: 'www.wowhead.com',
        path: '/spell=' + spell_id,
        method: 'get'
    };

    return new Promise((resolve, reject) => {
        /** http GET request to www.wowhead.com/spell={spell_id} */
        http.request(
            options,
            response => {
                /** subscribe to response object events in this callback */

                /** if the resposne object is in wrong state, reject */
                response.on('error', reject)
                    /** if the wowhead page has been read but no spell name has matches, resolve with null */
                    .on('end', () => {
                        if (!SPELL_CACHE[spell_id]) {
                            SPELL_CACHE[spell_id] = null;
                            resolve(null);
                        }
                    })
                    /** match a chunk against the regexp, if match succeeds, save the name
                     *  in cache, close the response stream and resolve the promise */
                    .on('data', chunk => {
                        const wowheadHtmlMatches = wowheadSpellNameRegexp.exec(chunk.toString());

                        if (wowheadHtmlMatches !== null) {
                            /** cache the request result */
                            SPELL_CACHE[spell_id] = {
                                id: spell_id,
                                name: wowheadHtmlMatches[1]
                            };

                            response.destroy();
                            resolve(SPELL_CACHE[spell_id]);
                        }
                    })
            })
            /** fire the request */
            .end();
    });
};

/**
 * Returns a promise of all records with entry matching the creature_id parameter.
 * @param {string} creature_id - creature entry id from wowhead
 * @returns {Promise.<[Object]>}
 */
function search_creature(creature_id) {
    const creatureQueryStr = 'SELECT * FROM creature_template WHERE entry =' + creature_id;

    return new Promise((resolve, reject) => {
        db.query(creatureQueryStr, (err, rows) => err ? reject(err) : resolve(rows));
    });
};

/**
 * Returns a promise of all creatures whose name matches the pattern of the provided name.
 * @param {string} name - name or part of the creature name
 * @returns {Promise.<[Object]>}
 */
function search_creature_name(name) {
    const queryString = 'SELECT * FROM creature_template WHERE name LIKE ?',
        pattern = '%' + name + '%';

    return new Promise((resolve, reject) => {
        db.query(queryString, pattern, (err, rows) => err ? reject(err) : resolve(rows));
    });
};

/**
 * Returns a promise of all creature texts for a creature with given enty
 * @param {string} creature_id
 * @returns {Promise.<[Object]>}
 */
function search_creature_text(creature_id) {

    const creatureTextQueryString = 'SELECT * FROM `creature_text` WHERE entry =' + creature_id;

    return new Promise((resolve, reject) => {
        db.query(creatureTextQueryString, (err, rows) => err ? reject(err) : resolve(rows));
    });
};

/**
 * Returns a promise of the provided game objects that have their entry equal to the passed id.
 * @param {string} gameobject_id
 * @returns {Promise.<[Object]>}
 */
function search_gameobject(gameobject_id) {
    const gameobjectQuery = 'SELECT * FROM gameobject_template WHERE entry = ' + gameobject_id + ';';

    return new Promise((resolve, reject) => {
        db.query(gameobjectQuery, (err, rows) => err ? reject(err) : resolve(rows));
    });
};

/**
 * Return a promise of all smart scripts that match both the passed entry id and the source type.
 * @param {string} entry_id
 * @param {string} source_type
 * @returns {Promise.<[Object]>}
 */
function search_sai(entry_id, source_type) {
    const smartSaiQueryString = 'SELECT * FROM `smart_scripts` WHERE `entryorguid` = ' + entry_id + ' and `source_type` = ' + source_type + ';';

    return new Promise((resolve, reject) => {
        db.query(smartSaiQueryString, (err, rows) => err ? reject(err) : resolve(rows));
    });
};


function setup_sai(sai_data) {
    try {
        if (typeof (sai_data) === 'undefined') {
            console.log('wft');
            return;
        }

        switch (sai_data[0].source_type) {
            case 0: //Creature
                var db_query = "UPDATE `creature_template` SET `AIName` = 'SmartAI' WHERE `entry` = " + sai_data[0].entryorguid + " ;";
                break;
            case 1: // GO
                var db_query = "UPDATE `gameobject_template` SET `AIName` = 'SmartGameObjectAI' WHERE `entry` = " + sai_data[0].entryorguid + " ;";
                break;
            case 2: //AreaTrigger
                var db_query = "REPLACE INTO `areatrigger_scripts` (`entry`, `ScriptName`) VALUES(" + sai_data[0].entryorguid + ",'SmartTrigger');";
                break;
            case 9: //TimedActionList
                var db_query = "";
                break;
            default:
                break;
        }

        if (sai_data[0].source_type !== 9) {
            db.query(db_query, function (err, result) {
                if (err) throw err;
                // console.log('Seted up SAI');
                return;
            });
        }
        return;
    }
    catch (err) {
        console.log(err.message);
    }
}

function clean_up_sai(sai_data, callback) {
    try {
        if (typeof (sai_data) === 'undefined') {
            console.log('wft');
            return;
        }

        db.query('DELETE FROM smart_scripts WHERE (source_type = ' + sai_data[0].source_type + ' AND entryorguid = ' + sai_data[0].entryorguid + ');', function (err, result) {
            if (err) throw err;
            return callback(sai_data);
        });

        return;
    }
    catch (err) {
        console.log(err.message);
    }
};


function run_script(sai_data) {

    try {
        if (typeof (sai_data) === 'undefined') {
            console.log('wft');
            return;
        }

        setup_sai(sai_data);


        for (var i = 0; i < sai_data.length; i++) {

            var post = sai_data[i];

            db.query('INSERT INTO smart_scripts SET ?', post, function (err, result) {
                if (err) throw err;
            });
        }
        return;
    }
    catch (err) {
        console.log(err.message);
    }
};


function run_text(text_data) {

    try {
        if (typeof (text_data) === 'undefined') {
            console.log('wft');
            return;
        }

        for (var i = 0; i < text_data.length; i++) {

            var post = text_data[i];

            db.query('REPLACE INTO `creature_text` SET ?', post, function (err, result) {
                if (err) throw err;
            });

        }
        return;
    }
    catch (err) {
        console.log(err.message);
    }
};




function run_creature_template(creature_data, callback) {
    try {
        if (typeof (sai_data) === 'undefined') {
            console.log('wft');
            return;
        }









        db.query('DELETE FROM smart_scripts WHERE (source_type = ' + sai_data[0].source_type + ' AND entryorguid = ' + sai_data[0].entryorguid + ');', function (err, result) {
            if (err) throw err;
            return callback(sai_data);
        });

        return;
    }
    catch (err) {
        console.log(err.message);
    }
};

module.exports.search_gameobject = search_gameobject;
module.exports.search_creature = search_creature;
module.exports.search_creature_name = search_creature_name;
module.exports.search_creature_text = search_creature_text;
module.exports.search_sai = search_sai;
module.exports.run_script = run_script;
module.exports.run_creature_template = run_creature_template;
module.exports.run_text = run_text;
module.exports.clean_up_sai = clean_up_sai;
module.exports.search_spell = search_spell;
module.exports.getUpdateQuery = getUpdateQuery;
