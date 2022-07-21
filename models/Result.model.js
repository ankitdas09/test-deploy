const mongoose = require('mongoose')

const ResultSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
})
const ResultModel = mongoose.model('Result', ResultSchema)
module.exports = ResultModel