"use strict";

module.exports = ({ TC_API }) => {
  return {
    getCreatureByName(req, res) {
      const creature_name = req.params.creature_name;

      if (!creature_name) {
        return res.status(400).json({
          message: "Searching for a creature by name requires creature name"
        });
      }

      TC_API.search_creature_name(creature_name).then(result =>
        res.json(result)
      );
    },

    getQuestByIdorName(req, res) {
      if (!req.params.quest_id || !req.params.quest_title) {
        return res.status(400).json({
          message: "Searching for a creature by name requires creature name"
        });
      }

      TC_API.search_quest(req.params.quest_id, req.params.quest_title).then(
        result => res.json(result)
      );
    },

    SearchHandler(req, res) {
      console.log(req.params);

      // Creature
      if (req.params.search_type == "creature") {
        let creature_id = parseInt(req.params.value1);

        TC_API.search_creature(creature_id)
          .then(result => res.json(result))
          .catch(error => res.status(500).json(error));

        return;
      }

      // Quest
      if (req.params.search_type == "quest") {
        if (!req.params.value1 || !req.params.value2) {
          return res
            .status(400)
            .json({ message: "Searching for a quest by id requires id" });
        }

        TC_API.search_quest(req.params.value1, req.params.value2).then(result =>
          res.json(result)
        );
      }

      return res.status(400).json({
        message: "Searching for a creature by name requires creature name"
      });
    }
  };
};
