'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.dbc;

    app.get('/dbc/spells/:spell_id', controller.getSpellbyID);
}