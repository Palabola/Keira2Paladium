'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.gameobject;

    app.get('/gameobject/gameobject_template/:gameobject_id', controller.getGameobjectByID);
}

