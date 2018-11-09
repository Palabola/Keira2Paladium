"use strict";

module.exports = ({ TC_API }) => {
  return {
    getSAI_by_Source_Entry(req, res) {
      const { entry_id, source_type } = req.params;

      if (!entry_id || !source_type) {
        return res.status(400).json({
          message:
            "Smart script entry id and source type are both needed for this type of search"
        });
      }

      TC_API.search_sai(entry_id, source_type)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
    },
    updateSAI(req, res) {
      TC_API.clean_up_sai(JSON.parse(req.body), function(sai_data) {
        TC_API.run_script(sai_data);

        res.send(JSON.parse(req.body));
      });
    }
  };
};
