const Hapi = require('@hapi/hapi');

//Get configuration.
const {
    config,
    validate
} = require('../config/');

//Get system events.
const events = require('./system-event');

//Load plugins.
const authModule = require('../modules/auth');

//Server start process.
const boostrap = async ()=>{

    try {

        const {
            server
        }=config;

        //Validate configuration.
        validate();
    
        //Create server.
        const hapiServer = Hapi.server({
            host:server.host,
            port:server.port
        });
    
        //Register plugins
        await hapiServer.register(authModule, {routes: {prefix: '/auth'}});        

        //Listen.
        await hapiServer.start();

        //Define events.        
        console.log(`> Server listening on ${server.host}:${server.port} - OK`);

    } catch(error){
        console.log('> Error on',error);
    }

}

//Start server.
boostrap();