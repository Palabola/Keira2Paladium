'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.search;
    
    //Creature
    app.get('/search/creature/:creature_id', controller.getCreaturebyID);
    app.get('/search/creature/name/:creature_name', controller.getCreaturebyName);
    //Gameobject
    //app.get('/search/gameobject/', controller.getCreaturebyName);
}

/*
 * 
app.post('/search/gameobject', function (req, res) {
    
    //TC_API.search_creature(req.params,function(result){
     
      res.send(JSON.parse(req.body));
        

});


});
 * 
 * 
 */