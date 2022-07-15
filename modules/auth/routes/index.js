const {
    loginController,
    registerController
} = require('../controller/');

module.exports = [
    {
        method: 'GET',
        path: '/login',
        handler: loginController
    },{
        method: 'GET',
        path: '/register',
        handler: registerController
    }
];