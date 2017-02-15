'use strict';

const path = require('path'),
    fs = require('fs');

module.exports = ({ TC_API /* getting the dependencies passed from app.js */ }) => {
    let controllers = [];

    fs.readdirSync(__dirname)
        .filter(x => x.includes('-controller'))
        .forEach(file => {
            let currentController = require(path.join(__dirname, file))({ TC_API }); // calling each controller via reflection and passing it all the dependencies

            let controllerName = file.substring(0, file.indexOf('-controller'));

            controllers[controllerName] = currentController;
        })

    return controllers;
};