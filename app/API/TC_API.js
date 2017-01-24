// LOGGER API
var db = require('./db_connect');
var util = require('util');


function search_creature(params, callback){
    
    try{
        if(typeof(params)==='undefined')
        { 
            console.log('wft');
            return;
        }

            var id = params.creature_id;

            //console.log(id);

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

function run_script(text){
    
    try{
        if(typeof(text)==='undefined')
        { 
            console.log('wft');
            return;
        }

            console.log(util.inspect(text));
            
            var text = text;
                    
             query =  text.trim();
            
            console.log(util.inspect(query));
            
            db.query(
                query, 
                function(err,rows){
                  if(err) throw err;
                    return;
                });
            

         return;
    }
    catch(err) {
    console.log(err.message);
    }   
    
};


/*
function insert_channel(params){
    
    try{
        if(typeof(data)==='undefined')
        { 
            console.log('wft');
            return;
        }
        for(var i=0; i < data.length; i++)
               {
                 var skip = 0;  

               if(typeof(cache_data)!=='undefined') 
               {
                        for(var k=0; k < cache_data.length; k++)   
                        {
                          if(cache_data[k]._id === data[i]._id)
                              {
                                 skip = 1;
                                 break;
                              }
                        }
                }
                
                 if(skip === 0)
                  {
                       var post  = {name:data[i].channel.name, data: JSON.stringify(data[i])};
                       db.query('INSERT INTO channel_meta SET ?', post, function(err, result) {
                          if (err) throw err;
                        });
                   } 

                }
                
        cache_data = data;
         return;
    }
    catch(err) {
    console.log(err.message);
    }   
    
};
*/


module.exports.search_creature = search_creature;
module.exports.search_sai = search_sai;
module.exports.run_script = run_script;

