'use strict';

const path = require('path');

const productionConfig = {
    app: {
        port: 5005
    },
    db: {
        logging: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'production_user',
        password: 'production_user_password',
        name: 'production'
    }
};

module.exports = productionConfig;