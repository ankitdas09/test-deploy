const AppError = require("../../utils/AppError");
const FormModel = require("../../models/Form.model");
const SchemaModel = require("../../models/Schema.model");
const EndUserModel = require("../../models/EndUser.model");
const ResultModel = require("../../models/Result.model");
const patientSchemaValidation = require("../../models/validationSchemas/PatientValidationSchema");
const indexSchemaValidation = require("../../models/validationSchemas/IndexValidationSchema");
const calculate = require("../../calculate");

exports.postNewForm = async (req, res, next) => {
	// CREATE NEW FORM
	const value = await patientSchemaValidation.validateAsync(req.body);
	console.log(value);
	const newForm = new FormModel(value);
	const schema = await SchemaModel.findOne();
	await newForm.save();
	// INCREMENT USER SUBMITTED NUMBER
	const user = await EndUserModel.findOne({ email: value.email });
	let submitted = user.submitted + 1;
	await EndUserModel.findByIdAndUpdate(user._id, { submitted: submitted });
	// CALCULATE RESULT AND SAVE
	const index = calculate(newForm, schema);
	console.log(index);
	const toSend = { ...newForm["_doc"], index: index };
	const newResult = new ResultModel({ value: index });
	await newResult.save();

	res.json(toSend);
};

exports.getAllForms = async (req, res) => {
	const forms = await FormModel.find();
	res.json(forms);
};

exports.getCurrentSchema = async (req, res) => {
	const schema = await SchemaModel.findOne({}, { _id: 0, __v: 0 });
	res.json(schema);
};

exports.updateSchema = async (req, res) => {
	const validData = await indexSchemaValidation.validateAsync(req.body);
	const oldSchema = await SchemaModel.findOne();
	if (!oldSchema) {
		const schema = new SchemaModel(validData);
		await schema.save();
		res.json({ error: false, message: "Schema Saved" });
	} else {
		const schema = await SchemaModel.findOneAndUpdate(
			{ _id: oldSchema._id },
			validData
		);
		res.json({ error: false, message: "Schema Saved" });
	}
};

exports.getFormById = async (req, res, next) => {
	const { id } = req.params;
	const form = await FormModel.findById(id);
	if (!form) {
		next(new AppError("Invalid Id", 500));
		return;
	}
	const schema = await SchemaModel.findOne();
	const index = calculate(form, schema);
	const toSend = { ...form["_doc"], index: index };
	res.json(toSend);
};
