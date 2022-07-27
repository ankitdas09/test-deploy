const mongoose = require('mongoose')

const CoeffSchema = mongoose.Schema({
    intercept: {
        type: Number,
        required: true
    },
    heartRate: {
        type: Number,
        required: true
    },
    RVDysfunction: {
        type: Number,
        required: true
    }, eGFR: {
        type: Number,
        required: true
    }, ProBNP: {
        type: Number,
        required: true
    }, age: {
        type: Number,
        required: true
    }, gender: {
        type: Number,
        required: true
    }, atrialFibrillation: {
        type: Number,
        required: true
    }, diabetes: {
        type: Number,
        required: true
    }, hyperTension: {
        type: Number,
        required: true
    }, chronicKidneyDisease: {
        type: Number,
        required: true
    }, acei: {
        type: Number,
        required: true
    }, mra: {
        type: Number,
        required: true
    }, diuretic: {
        type: Number,
        required: true
    }, statin: {
        type: Number,
        required: true
    }, pulmonaryEdema: {
        type: Number,
        required: true
    }
})

const SchemaModel = mongoose.model('Schema', CoeffSchema)

module.exports = SchemaModel