'use strict';

module.exports = ({ TC_API }) => {
    return {
        getDiffDeleteInsertOneKey(req, res) {

           var body_json = JSON.parse(req.body);
           
           // console.log(JSON.parse(req.body));

            TC_API.getDiffDeleteInsertOneKey(body_json.tableName,body_json.primaryKey,body_json.currentRows,body_json.newRows, function (query) {

               return res.send(query);
            });
            

        }
        
    }
}