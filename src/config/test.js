'use strict';

const testConfig = {
    app: {
        port: 5005
    },
    db: {
        logging: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 6603,
        username: 'my_database_user',
        password: 'my_database_user_password',
        name: 'my_database'
    }
};

module.exports = testConfig;