"use strict";

module.exports = ({ app, controllers }) => {
  const controller = controllers.database;

  app.post("/TC_API/DeleteInsert", controller.DeleteInsert);
};
