'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.creature;
    
    app
      .get('/creature/template/:creature_id', controller.getCreatureByID)
      .get('/creature/text/:creature_id', controller.getCreatureTextByID)
      .get('/creature/:table/:creature_id',controller.get_object_entities)
      .post('/creature_text_execute', controller.CreatureTextUpdate)
      .post('/creature/template/update', controller.CreatureTemplateUpdate);
};

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