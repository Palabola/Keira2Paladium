'use strict';

module.exports = ({ TC_API }) => {
    return {
        getSAI_by_Source_Entry(req, res) {
            
                 TC_API.search_sai(req.params,function(result){
     
                      return  res.send(result);

                      });
        },
        
        updateSAI(req, res) {
            
         TC_API.clean_up_sai(JSON.parse(req.body),function(sai_data){
            
          TC_API.run_script(sai_data);
          
          res.send(JSON.parse(req.body)); 
        });
        }

        
    }
}