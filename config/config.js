require('dotenv').config();

const config = {
    server:{
        port:process.env.SERVER_PORT,
        host:process.env.SERVER_HOST
    },
    bd:{
        pwd:process.env.BD_PWD,
        user:process.env.BD_USER,
        host:process.env.BD_HOST
    }
};

module.exports = config;