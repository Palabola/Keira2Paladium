'use strict';

const fs = require('fs'),
    path = require('path');

    module.exports = ({ app }) => {
        fs.readdirSync('./app/routers')
        .filter(x => x.includes('-router'))
        .forEach(file => {
            require(path.join(__dirname, file))({});
        });

        app.get('*', (req, res) => {
            res.status('404').redirect('/');
        })
    }