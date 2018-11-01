"use strict";

module.exports = ({ app, controllers }) => {
  const controller = controllers.creature;

  app
    .get(
      "/creature/creature_addon/id/:creature_id",
      controller.getCreatureAddon
    )
    .get(
      "/creature/:table/id/:creature_id",
      controller.get_object_entitiesbyEntry
    )
    .get("/creature/:table/:creature_id", controller.get_object_entitiesbyEntry)
    .post("/creature_text_execute", controller.CreatureTextUpdate)
    .post("/creature/template/", controller.CreatureTemplateUpdate);
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
