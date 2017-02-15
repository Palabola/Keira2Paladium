'use strict';

module.exports = ({ TC_API }) => {
    return {
        getCreaturebyID(req, res) {
            
               TC_API.search_creature(req.params,function(result){
     
               return res.send(result);

              }); 
        },
        
     getCreatureTextbyID(req, res) {
            TC_API.search_creature_text(req.params,function(result){
     
      return res.send(result);
        
            }); 
        },
        
      CreatureTextUpdate(req, res) {
          res.send(JSON.parse(req.body)); 
  
        TC_API.run_text(JSON.parse(req.body),function(){
          
          return res.send(JSON.parse(req.body)); 
        });
        },
        
        CreatureTemplateUpdate(req, res) {
          
         let creature_data = JSON.parse(req.body);
         
          let where = 'entry = '+creature_data.entry;

         TC_API.getUpdateQuery('creature_template', where, creature_data.current, creature_data.new,(result) =>{
             
           return res.send(result);
             
         });
             
         } 

    }
}