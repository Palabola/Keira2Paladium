'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.gameobject;

    app.get('/gameobject/template/:gameobject_id', controller.getGameobjectbyID);

    

}

/*
 * 

app.get('/gameobject/template/:gameobject_id', function (req, res) {
    
    TC_API.search_gameobject(req.params,function(result){
     
      res.send(result);
        
    });


*/