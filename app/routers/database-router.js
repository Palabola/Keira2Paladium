"use strict";

module.exports = ({ app, controllers }) => {
  const controller = controllers.database;

  app.post("/TC_API/DeleteInsert", controller.DeleteInsert);
  app.post("/TC_API/Creature/Creature_addon", controller.Creature_addon_edit);
};
