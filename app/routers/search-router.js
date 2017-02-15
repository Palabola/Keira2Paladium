'use strict';

module.exports = ({ app, controllers,TC_API }) => {
    const controller = controllers.search;

    app.get('/search/creature/:creature_id', controller.getCreaturebyID);
}