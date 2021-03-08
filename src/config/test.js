'use strict';

const testConfig = {
    app: {
        port: 3005
    },
    db: {
        logging: false,
        dialect: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 33065,
        name: process.env.DATABASE_NAME || 'my_database',
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'root'
    }
};

module.exports = testConfig;