'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.creature;

    app.get('/creature/template/:creature_id', controller.getCreaturebyID);
    app.get('/creature/text/:creature_id', controller.getCreatureTextbyID);
    
    app.post('/creature_text_execute', controller.CreatureTextUpdate);
    
    app.post('/creature/template/update', controller.CreatureTemplateUpdate);
    

}

/*
 * 


app.post('/creature_template', function (req, res) {
  
   res.send(JSON.parse(req.body));
  
    /*
        TC_API.clean_up_sai(JSON.parse(req.body),function(sai_data){
            
          TC_API.run_script(sai_data);
          
          res.send(JSON.parse(req.body)); 
        });
  */
//});
 //*/