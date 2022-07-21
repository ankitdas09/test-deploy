const router = require('express').Router()
const Joi = require('joi')
const isAuthenticated = require('../middleware/isAuthenticated.middleware')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')
const isAdmin = require('../middleware/isAdmin.middleware')

const FormModel = require('../models/Form.model')
const SchemaModel = require('../models/Schema.model')
const EndUserModel = require('../models/EndUser.model')
const ResultModel = require('../models/Result.model')

const patientSchemaValidation = require('../models/validationSchemas/PatientValidationSchema')
const indexSchemaValidation = require('../models/validationSchemas/IndexValidationSchema')

const calculate = require('../calculate')

router.get('/', isAdmin, catchAsync(async (req, res) => {
    const forms = await FormModel.find()
    res.json(forms)
}))

router.post('/', isAuthenticated, catchAsync(async (req, res, next) => {
    const value = await patientSchemaValidation.validateAsync(req.body)
    const newForm = new FormModel(value)
    const schema = await SchemaModel.findOne()
    await newForm.save()
    const user = await EndUserModel.findOne({ email: req.user._json.email })
    let submitted = user.submitted + 1
    await EndUserModel.findByIdAndUpdate(user._id, { submitted: submitted })
    const index = calculate(newForm, schema)
    const toSend = { ...newForm['_doc'], index: index }
    const newResult = new ResultModel({ value: index })
    await newResult.save()
    res.json(toSend)
}))

router.get('/schema', isAdmin, catchAsync(async (req, res) => {
    const schema = await SchemaModel.findOne({}, { _id: 0, __v: 0 })
    res.json(schema)
}))

router.post('/schema', catchAsync(async (req, res) => {
    const validData = await indexSchemaValidation.validateAsync(req.body)
    const oldSchema = await SchemaModel.findOne()
    if (!oldSchema) {
        const schema = new SchemaModel(validData)
        await schema.save()
        res.json({ error: false, message: 'Schema Saved' })
    } else {
        const schema = await SchemaModel.findOneAndUpdate({ _id: oldSchema._id }, validData)
        res.json({ error: false, message: 'Schema Saved' })
    }
    // indexSchema = { ...validData }

}))

router.get('/all', isAdmin, catchAsync(async (req, res) => {
    const forms = await FormModel.find()
    res.json(forms)
}))

router.get('/:id', isAdmin, catchAsync(async (req, res) => {
    // 62d7aeaf60cf2b0f9611c041
    const { id } = req.params
    const form = await FormModel.findById(id)
    const schema = await SchemaModel.findOne()
    const index = calculate(form, schema)
    const toSend = { ...form['_doc'], index: index }
    res.json(toSend)
}))


module.exports = router