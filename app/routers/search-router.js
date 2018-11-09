"use strict";

module.exports = ({ app, controllers }) => {
  const controller = controllers.search;

  app.get("/search/:search_type/:value1", controller.SearchHandler);
};
