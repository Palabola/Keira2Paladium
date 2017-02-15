'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();

    app.set('view options', { layout: false });
    app.use(express.static(path.resolve(__dirname + '')));
    app.use(bodyParser.text());

    module.exports = app;