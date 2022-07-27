const Joi = require('joi')

const patientSchemaValidation = Joi.object({
    email: Joi.string().email().required(),
    heartRate: Joi.number().min(50).max(188).required(),
    RVDysfunction: Joi.number().min(0).max(3).required(),
    eGFR: Joi.number().min(4).max(240).required(),
    ProBNP: Joi.number().min(15).max(35000).required(),
    age: Joi.number().min(22).max(91).required(),
    gender: Joi.number().integer().min(0).max(1).required(),
    atrialFibrillation: Joi.number().integer().min(0).max(1).required(),
    diabetes: Joi.number().integer().min(0).max(1).required(),
    hyperTension: Joi.number().integer().min(0).max(1).required(),
    chronicKidneyDisease: Joi.number().integer().min(0).max(1).required(),
    acei: Joi.number().integer().min(0).max(1).required(),
    mra: Joi.number().integer().min(0).max(1).required(),
    diuretic: Joi.number().integer().min(0).max(1).required(),
    statin: Joi.number().integer().min(0).max(1).required(),
    pulmonaryEdema: Joi.number().integer().min(0).max(1).required(),
}).required()
module.exports = patientSchemaValidation