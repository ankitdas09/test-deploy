const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')
const EndUserModel = require('../models/EndUser.model')
const AdminModel = require('../models/Admin.model')

const isAdmin = catchAsync(async (req, res, next) => {
    if (!req.isAuthenticated() && !req.user) {
        next(new AppError('Not Authenticated!', 401))
        return
    }
    const User = await EndUserModel.findOne({ email: req.user._json.email })
    if (!User) {
        next(new AppError('Not Valid User', 403))
        return
    }
    const Admin = await AdminModel.findOne({ email: req.user._json.email })
    if (!Admin) {
        next(new AppError('Not Admin!', 403))
        return
    }
    next()
})

module.exports = isAdmin