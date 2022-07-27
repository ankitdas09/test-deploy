const EndUserModel = require('../../models/EndUser.model')
const userValidationSchema = require('../../models/validationSchemas/UserValidationSchema')
const ResultModel = require('../../models/Result.model')
const AdminModel = require('../../models/Admin.model')

exports.getAllUsers = async (req, res) => {
    const users = await EndUserModel.find({}, { _id: 0, __v: 0 })
    res.send(users)
}

exports.addNewUser = async (req, res) => {
    const { email } = req.body
    const validatedEmail = await userValidationSchema.validateAsync({ email })
    // console.log(validatedEmail)
    const newUser = new EndUserModel(validatedEmail)
    await newUser.save()
    res.send(newUser)
}

exports.getResults = async (req, res) => {
    const allResults = await ResultModel.find()
    let total = allResults.length
    let pos = 0
    let neg = 0
    for (let i = 0; i < total; i++) {
        if (allResults[i].value >= 0.5) {
            pos++
        } else {
            neg++
        }
    }
    getPositivePercentage = () => {
        if (total == 0) {
            return 0
        }
        if (neg == 0) {
            return 100
        }
        return (pos / total) * 100
    }
    res.json({
        total: total,
        positive: pos,
        negative: neg,
        positivePercentage: getPositivePercentage()
        // data: [...allResults]
    })
}

exports.addNewAdmin = async (req, res) => {
    const { email } = req.body
    const newAdmin = new AdminModel({ email: email })
    await newAdmin.save()
    res.json(newAdmin)
}