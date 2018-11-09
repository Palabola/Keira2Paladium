"use strict";

module.exports = ({ TC_API }) => {
  return {
    DeleteInsert(req, res) {
      let query_data = JSON.parse(req.body);

      TC_API.DeleteInsertQuery(
        query_data.tableName,
        query_data.primaryKeys,
        query_data.Rows
      );

      res.status(200).send("Done");
    },

    Creature_addon_edit(req, res) {
      let query_data = JSON.parse(req.body);

      TC_API.Creature_addon_edit(
        query_data.creature_entry,
        query_data.Rows
      ).then(res.status(200).send("Done"));
    }
  };
};
