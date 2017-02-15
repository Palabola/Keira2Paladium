'use strict';

const path = require('path'),
    fs = require('fs');

module.exports = ({}) => {
    let controllers = [];

    fs.readdirSync(__dirname)
        .filter(x => x.includes('-controller'))
        .forEach(file => {
            let currentController = require(path.join(__dirname, file))({});

            let controllerName = file.substring(0, file.indexOf('-controller'));

            controllers[controllerName] = currentController;
        })

    return controllers;
};