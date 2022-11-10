const calculate = (data, schema) => {
	const calculatedDataObject = {
		intercept: schema.intercept,
		heartRate: schema.heartRate * data.heartRate,
		RVDysfunction: schema.RVDysfunction * data.RVDysfunction,
		eGFR: schema.eGFR * data.eGFR,
		ProBNP: schema.ProBNP * data.ProBNP,
		age: schema.age * data.age,
		gender: data.gender * schema.gender,
		atrialFibrillation: data.atrialFibrillation * schema.atrialFibrillation,
		diabetes: data.diabetes * schema.diabetes,
		hyperTension: data.hyperTension * schema.hyperTension,
		chronicKidneyDisease:
			data.chronicKidneyDisease * schema.chronicKidneyDisease,
		acei: data.acei * schema.acei,
		mra: data.mra * schema.mra,
		diuretic: data.diuretic * schema.diuretic,
		statin: data.statin * schema.statin,
		pulmonaryEdema: data.pulmonaryEdema * schema.pulmonaryEdema,
	};

	const keys = Object.keys(calculatedDataObject);
	let summation = 0;
	keys.map((key) => {
		const val = calculatedDataObject[key];
		summation += val;
	});
	let pby1minusp = Math.exp(summation);
	let onebyp = 1 + 1 / pby1minusp;
	let p = 1 / onebyp;
	// return Math.round((p + Number.EPSILON) * 1000) / 1000
	return p.toFixed(3);
};

module.exports = calculate;

// const schema = {
//     "intercept": -3.6277,
//     "heartRate": 0.0086,
//     "RVDysfunction": -0.305,
//     "eGFR": -0.0093,
//     "ProBNP": 0.000048936,
//     "age": 0.0197,
//     "gender": 0.3875,
//     "atrialFibrillation": 1.518,
//     "diabetes": -0.0765,
//     "hyperTension": 0.3067,
//     "chronicKidneyDisease": -0.0204,
//     "acei": 0.5356,
//     "mra": 1.53,
//     "diuretic": 0.9998,
//     "statin": 0.4138,
//     "pulmonaryEdema": 0.6114
// }
// const data = {
//     "heartRate": 78,
//     "RVDysfunction": 2.1,
//     "eGFR": 14,
//     "ProBNP": 9361,
//     "age": 74,
//     "gender": 1,
//     "atrialFibrillation": 0,
//     "diabetes": 1,
//     "hyperTension": 1,
//     "chronicKidneyDisease": 1,
//     "acei": 0,
//     "mra": 0,
//     "diuretic": 0,
//     "statin": 1,
//     "pulmonaryEdema": 1
// }
// console.log(calculate(data, schema))
