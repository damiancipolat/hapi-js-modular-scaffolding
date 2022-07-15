const loginController = (request,reply)=>{

    return reply.response({
        mock:true,
        data:'AAAA'
    }).code(200);

}

const registerController = (request,reply)=>{

    return reply.response({
        mock:true,
        data:'BBBB'
    }).code(200);

}

module.exports={
    loginController,
    registerController
};