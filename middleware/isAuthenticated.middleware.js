const AppError = require('../utils/AppError')
const EndUserModel = require('../models/EndUser.model')
const catchAsync = require('../utils/catchAsync')
const isAuthenticated = catchAsync(async (req, res, next) => {
    if (!req.isAuthenticated() && !req.user) {
        next(new AppError('Not Authenticated', 403))
        return
    }
    const User = await EndUserModel.findOne({ email: req.user._json.email })
    if (!User) {
        next(new AppError('Not Valid User', 403))
        return
    }
    next()
})

module.exports = isAuthenticated