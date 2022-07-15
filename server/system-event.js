//On server internal error.
const onServerError = ()=>console.error({message:`Server error`});

//On server start.
const onListen = (port)=>{

    console.info('NODEJS challenge');
    console.info(`City weather API - Running on port: ${port}`);
  
}

//When the process receive kill signal.
const onProcessKill = server =>{
  
  console.info('Service termination signal received');
  
 // setTimeout(() => {

    console.info('Finishing server');
    //server.close(()=>process.exit(0));

 // }, 100);

}

//When in the server happen a uncaugth exception.
const onException = err =>console.error({message:err});

module.exports = {
  onListen,
  onProcessKill,
  onServerError,
  onException
};