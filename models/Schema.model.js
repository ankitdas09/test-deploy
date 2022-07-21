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
    }, gender0: {
        type: Number,
        required: true
    }, gender1: {
        type: Number,
        required: true
    }, sinusRhythm0: {
        type: Number,
        required: true
    }, sinusRhythm1: {
        type: Number,
        required: true
    }, atrialFibrillation0: {
        type: Number,
        required: true
    }, atrialFibrillation1: {
        type: Number,
        required: true
    }, diabetes0: {
        type: Number,
        required: true
    }, diabetes1: {
        type: Number,
        required: true
    }, hyperTension0: {
        type: Number,
        required: true
    }, hyperTension1: {
        type: Number,
        required: true
    }, chronicKidneyDisease0: {
        type: Number,
        required: true
    }, chronicKidneyDisease1: {
        type: Number,
        required: true
    }, acei0: {
        type: Number,
        required: true
    }, acei1: {
        type: Number,
        required: true
    }, mra0: {
        type: Number,
        required: true
    }, mra1: {
        type: Number,
        required: true
    }, diuretic0: {
        type: Number,
        required: true
    }, diuretic1: {
        type: Number,
        required: true
    }, statin0: {
        type: Number,
        required: true
    }, statin1: {
        type: Number,
        required: true
    }, pulmonaryEdema0: {
        type: Number,
        required: true
    }, pulmonaryEdema1: {
        type: Number,
        required: true
    },
})

const SchemaModel = mongoose.model('Schema', CoeffSchema)

module.exports = SchemaModel