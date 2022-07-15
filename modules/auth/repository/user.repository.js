const userService = require('../service/user.service');

const find = async (id)=>{
    userService.validate('a','b');
    return 0;
}

const remove = async (id)=>{
    return 0;   
}

const update = async (id)=>{
    return 0;   
}

const create = async (id)=>{
    return 0;   
}

module.exports={
    find,
    remove,
    update,
    create
};