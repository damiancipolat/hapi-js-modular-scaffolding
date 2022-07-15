const Joi = require('joi');

const server = Joi.object({
    host: Joi.string().required(),
    port: Joi.string().required()
});

const bd = Joi.object({
    pwd: Joi.string().required(),
    user: Joi.string().required(),
    host: Joi.string().required()
});

const config = Joi.object({
    server,
    bd
});

module.exports = config;