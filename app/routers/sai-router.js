'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.sai;

    app.get('/smart_scripts/:source_type/:entry_id', controller.getSAI_by_Source_Entry);
    app.post('/query_execute', controller.updateSAI);
}