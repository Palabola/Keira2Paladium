'use strict';

module.exports = ({ TC_API }) => {
    return {
        getGameobjectbyID(req, res) {
            
                  TC_API.search_gameobject(req.params,function(result){
     
                  return  res.send(result);
              }); 
        },
 
    }
}