'use strict';

const express = require('express');
const config = require('./config');
const app = express();

// Multilanguage
const i18n = require("i18n");
i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'es',
    register: global,
    directory: __dirname + '/locales'
});

// Listen app
app.listen(config.app.port, function () {
    console.log(i18n.__('App is active and listening on ') + `${config.app.port}`);
    console.log(i18n.__('Listening on ') + `${config.app.port}`);

});