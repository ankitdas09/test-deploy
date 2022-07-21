const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    }
})

const AdminModel = mongoose.model('Admin', AdminSchema)

module.exports = AdminModel