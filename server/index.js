const Hapi = require('@hapi/hapi');

//Get configuration.
const {
    config,
    validate
} = require('../config/');

//Get system events.
const events = require('./system-event');

//Define system events.
const registerEvents = (server)=>{

    process.on('SIGINT', ()=>events.onProcessKill(server));
    process.on('SIGTERM',()=>events.onProcessKill(server));
    process.on('unhandledRejection', events.onException);
    process.on('uncaughtException',  (err)=>events.onException(err));

}

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
    
        //Listen.
        await hapiServer.start();

        //Define events.
        //registerEvents(hapiServer);
        console.log(`> Server listening on ${server.host}:${server.port} - OK`);

    } catch(error){

        console.log('> Error on',error);

    }

}


//Start server.
boostrap();