const Joi = require('joi')

const userValidationSchema = Joi.object({
    email: Joi.string().email().required()
}).required()
module.exports = userValidationSchema