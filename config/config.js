require('dotenv').config();
var config = {
    URL_REQUEST_LIVE: 'http://app.sms.fpt.net',
    URL_REQUEST_SANBOX: 'http://sandbox.sms.fpt.net',
    database: {
        host: '1.55.215.214',
        user: 'root',
        password: process.env.ORACLE_PASSWORD,
        port: 3969,
        database: 'scrap',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    log: {
        orgLog: '../../logs'
    },
    redis: {
        host: 'localhost',
        port: 6379
    },
    server: {
        host: '127.0.0.1',
        port: '3200'
    },
    authprefix: 'Bearer ',
    jwtExpiresIn: 864000000000,
    secret: process.env.SECRET,
    jsonURL: {
        grant_type: 'client_credentials',
        scope: 'send_brandname_otp',
        session_id: '789dC48b88e54f58ece5939f14a',
        envi: {
            sandbox: {
                client_id: '4DACb1d822778BbF5cc064f8e69fa676e47e4bd3',
                client_secret: 'b23f54AdF69cd53d321548E8d96086f2540561ba9fBc76eEca5212904135d5c01A35cf8b',
            },
            live: {
                client_id: '10cdD871329F62c0528D2cb10AFf7c5c361aa6d2',
                client_secret: 'eFd9ae9327dd2c690e84a04acc846d0efc623e88c4183c3cf817ae6C52775084c03fFAdc',
            }
        }
    }
};

module.exports = config;
