const Joi = require('joi')

const indexSchemaValidation = Joi.object({
    intercept: Joi.number().required(),
    heartRate: Joi.number().required(),
    RVDysfunction: Joi.number().required(),
    eGFR: Joi.number().required(),
    ProBNP: Joi.number().required(),
    age: Joi.number().min(0).required(),
    gender: Joi.number().required(),
    atrialFibrillation: Joi.number().required(),
    diabetes: Joi.number().required(),
    hyperTension: Joi.number().required(),
    chronicKidneyDisease: Joi.number().required(),
    acei: Joi.number().required(),
    mra: Joi.number().required(),
    diuretic: Joi.number().required(),
    statin: Joi.number().required(),
    pulmonaryEdema: Joi.number().required(),
}).required()

module.exports = indexSchemaValidation