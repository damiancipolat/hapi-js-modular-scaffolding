const config = require('./config');
const Tconfig = require('./Tconfig');

//COnfiguration validation.
const validate = ()=>{

    const result = Tconfig.validate(config);
    
    if (result.error) {
     console.log('> Configuration validation - Error');
     throw new Error(`Configuration validation error - ${result.error.details[0].message}`);
    }

    console.log('> Configuration validation - OK');

}

module.exports ={
    config,
    validate
};