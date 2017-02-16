'use strict';

const fs = require('fs'),
    path = require('path');


    module.exports = ({ app, controllers }) => {
        fs.readdirSync(__dirname)
        .filter(x => x.includes('-router'))
        .forEach(file => {
            require(path.join(__dirname, file))({ app, controllers });
        });

        app.get('*', (req, res) => {
            res.status('404').redirect('/');
        })
    }