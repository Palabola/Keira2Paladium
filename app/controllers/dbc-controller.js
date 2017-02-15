'use strict';

module.exports = ({ TC_API }) => {
    return {
        getSpellbyID(req, res) {
            
                   TC_API.search_spell(req.params,function(result){
     
                        let spell = {"id": result.id, "spellName": result.name};

                        return res.send(spell);

                      });
        }
    }
}