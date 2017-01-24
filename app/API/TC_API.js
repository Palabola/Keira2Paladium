// LOGGER API
var db = require('./db_connect');


function search_creature(params, callback){
    
    try{
        if(typeof(params)==='undefined')
        { 
            console.log('wft');
            return;
        }

            var id = params.creature_id;

            db.query(
                'SELECT * FROM creature_template WHERE entry =' + id, 
                function(err,rows){
                  if(err) throw err;
                  callback(rows);
                });


         return;
    }
    catch(err) {
    console.log(err.message);
    }   
    
};

function search_gameobject(params, callback){
    
    try{
        if(typeof(params)==='undefined')
        { 
            console.log('wft');
            return;
        }

            var id = params.gameobject_id;

            db.query(
                'SELECT * FROM gameobject_template WHERE entry =' + id, 
                function(err,rows){
                  if(err) throw err;
                  callback(rows);
                });


         return;
    }
    catch(err) {
    console.log(err.message);
    }   
    
};


function search_sai(params, callback){
    
    try{
        if(typeof(params)==='undefined')
        { 
            console.log('wft');
            return;
        }

            var entry_id = params.entry_id;
            var source_type = params.source_type;

          //  console.log(entry_id);
         //   console.log(source_type);

            db.query(
                'SELECT * FROM `smart_scripts` WHERE `entryorguid` = '+entry_id+' and `source_type` = '+source_type+';', 
                function(err,rows){
                  if(err) throw err;
                  callback(rows);
                });


         return;
    }
    catch(err) {
    console.log(err.message);
    }   
    
};


function setup_sai(sai_data)
{
     try{
        if(typeof(sai_data)==='undefined')
        { 
            console.log('wft');
            return;
        }
        
          switch(sai_data[0].source_type) {
                    case 0: //Creature
                        var db_query = "UPDATE `creature_template` SET `AIName` = 'SmartAI' WHERE `entry` = "+sai_data[0].entryorguid+" ;";
                        break;
                    case 1: // GO
                        var db_query = "UPDATE `gameobject_template` SET `AIName` = 'SmartGameObjectAI' WHERE `entry` = "+sai_data[0].entryorguid+" ;";
                        break;
                    case 2: //AreaTrigger
                        var db_query = "REPLACE INTO `areatrigger_scripts` (`entry`, `ScriptName`) VALUES("+sai_data[0].entryorguid+",'SmartTrigger');";
                        break; 
                    case 9: //TimedActionList
                        var db_query = "";
                        break;
                    default:
                        break;
                } 
        
                    if(sai_data[0].source_type!==9)
                    {  
                      db.query(db_query, function(err, result) {
                        if (err) throw err;
                           // console.log('Seted up SAI');
                            return;
                       });
                    }
         return;
    }
    catch(err) {
    console.log(err.message);
    } 
}

function clean_up_sai(sai_data,callback)
{
    try{
        if(typeof(sai_data)==='undefined')
        { 
            console.log('wft');
            return;
        }
        
          db.query('DELETE FROM smart_scripts WHERE (source_type = '+sai_data[0].source_type+' AND entryorguid = '+sai_data[0].entryorguid+');', function(err, result) {
            if (err) throw err;
                return callback(sai_data);
                });
        
         return;
    }
    catch(err) {
    console.log(err.message);
    } 
};


function run_script(sai_data){
    
       try{
        if(typeof(sai_data)==='undefined')
        { 
            console.log('wft');
            return;
        }
        
        setup_sai(sai_data);
        

        for(var i=0; i < sai_data.length; i++)
               {
                   
                       var post  = sai_data[i];

                       db.query('INSERT INTO smart_scripts SET ?', post, function(err, result) {
                          if (err) throw err;
                        });
                } 
         return;
    }
    catch(err) {
    console.log(err.message);
    }   
};


module.exports.search_gameobject = search_gameobject;
module.exports.search_creature = search_creature;
module.exports.search_sai = search_sai;
module.exports.run_script = run_script;
module.exports.clean_up_sai = clean_up_sai;
