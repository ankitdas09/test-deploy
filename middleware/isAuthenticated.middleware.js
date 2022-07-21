const AppError = require('../utils/AppError')
const EndUserModel = require('../models/EndUser.model')
const catchAsync = require('../utils/catchAsync')
const isAuthenticated = catchAsync(async (req, res, next) => {
    if (!req.isAuthenticated() && !req.user) {
        next(new AppError('Not Authenticated', 403))
        return
    }
    const Users = await EndUserModel.find()
    const emails = Users.map(user => user.email)
    if (!emails.includes(req.user._json.email)) {
        next(new AppError('Not Valid User', 403))
        return
    }
    next()
})

module.exports = isAuthenticated