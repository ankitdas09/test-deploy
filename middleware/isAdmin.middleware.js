const AppError = require('../utils/AppError')
// const adminMails = require('../models/adminEmails.model')
const catchAsync = require('../utils/catchAsync')
const EndUserModel = require('../models/EndUser.model')
const AdminModel = require('../models/Admin.model')

const isAdmin = catchAsync(async (req, res, next) => {
    if (!req.isAuthenticated() && !req.user) {
        next(new AppError('Not Authenticated!', 403))
        return
    }
    const Users = await EndUserModel.find()
    const emails = Users.map(user => user.email)
    if (!emails.includes(req.user._json.email)) {
        next(new AppError('Not Valid User', 403))
        return
    }
    const Admins = await AdminModel.find()
    const adminMails = Admins.map(admin => admin.email)
    if (!adminMails.includes(req.user._json.email)) {
        next(new AppError('Not Admin!', 403))
        return
    }
    next()
})

module.exports = isAdmin