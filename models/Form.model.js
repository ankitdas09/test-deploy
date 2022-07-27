const mongoose = require('mongoose')

const FormSchema = mongoose.Schema({
    email: {
        type: String,
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
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, atrialFibrillation: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, diabetes: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, hyperTension: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, chronicKidneyDisease: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, acei: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, mra: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, diuretic: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, statin: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    }, pulmonaryEdema: {
        type: Number,
        min: 0,
        max: 1,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },
        required: true
    },
})

const FormModel = mongoose.model('Form', FormSchema)

module.exports = FormModel