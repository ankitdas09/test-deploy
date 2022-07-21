const Joi = require('joi')
// const patientSchemaValidation = Joi.object({
//     email: Joi.string().email().required(),
//     name: Joi.string().min(3).max(30).required(),
//     weight: Joi.number().min(1).required(),
//     age: Joi.number().min(1).required(),
//     height: Joi.number().min(1).required(),
//     bloodSugar: Joi.number().min(1).required(),
// }).required()
const patientSchemaValidation = Joi.object({
    email: Joi.string().email().required(),
    intercept: Joi.number().required(),
    heartRate: Joi.number().min(0).required(),
    RVDysfunction: Joi.number().min(0).required(),
    eGFR: Joi.number().min(0).required(),
    ProBNP: Joi.number().min(0).required(),
    age: Joi.number().min(0).required(),
    gender: Joi.number().integer().min(0).max(1).required(),
    sinusRhythm: Joi.number().integer().min(0).max(1).required(),
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

// {
//     "_id": "62d706a10834bcedb7e4589f",
//     "email": "ravenklawgaming@gmail.com",
//     "intercept": 0.728,
//     "heartRate": 100,
//     "RVDysfunction": 1,
//     "eGFR": 71,
//     "ProBNP": 1160,
//     "age": 19,
//     "gender": 0,
//     "sinusRhythm": 0,
//     "atrialFibrillation": 1,
//     "diabetes": 1,
//     "hyperTension": 1,
//     "chronicKidneyDisease": 1,
//     "acei": 1,
//     "mra": 1,
//     "diuretic": 1,
//     "statin": 1,
//     "pulmonaryEdema": 1,
//     "__v": 0,
//     "index": 100
// }