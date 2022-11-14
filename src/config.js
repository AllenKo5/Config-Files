require('dotenv').config();

const staticAssets = {
    development: {
        path: 'clientDev/'
    },
    production: {
        path: 'client/'
    }
};

module.exports = {
    staticAssets: staticAssets[process.env.NODE_ENV],
};