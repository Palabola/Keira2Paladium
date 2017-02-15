'use strict';

module.exports = ({ app, controllers }) => {
    const controller = controllers.home;

    app.get('/', controller.getHomePage);
}