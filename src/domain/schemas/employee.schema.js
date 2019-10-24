const Joi = require('@hapi/joi');

const employSchema = Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    position: Joi.string().min(2).max(30).required(),
    office: Joi.string().min(2).max(30).required(),
    salary: Joi.number().integer().min(20000)
});


module.exports = employSchema;