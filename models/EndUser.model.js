const mongoose = require('mongoose')

const EndUserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    submitted: {
        type: Number,
        default: 0
    }
})

const EndUserModel = mongoose.model('EndUser', EndUserSchema)

module.exports = EndUserModel