const calculate = (data, schema) => {
    const calculatedDataObject = {
        "intercept": schema.intercept * data.intercept,
        "heartRate": schema.heartRate * data.heartRate,
        "RVDysfunction": schema.RVDysfunction * data.RVDysfunction,
        "eGFR": schema.eGFR * data.eGFR,
        "ProBNP": schema.ProBNP * data.ProBNP,
        "age": schema.age * data.age,
        "gender": data.gender === 0 ? schema.gender0 : schema.gender1,
        "sinusRhythm": data.sinusRhythm === 0 ? schema.sinusRhythm0 : schema.sinusRhythm1,
        "atrialFibrillation": data.atrialFibrillation === 0 ? schema.atrialFibrillation0 : schema.atrialFibrillation1,
        "diabetes": data.diabetes === 0 ? schema.diabetes0 : schema.diabetes1,
        "hyperTension": data.hyperTension === 0 ? schema.hyperTension0 : schema.hyperTension1,
        "chronicKidneyDisease": data.chronicKidneyDisease === 0 ? schema.chronicKidneyDisease0 : schema.chronicKidneyDisease1,
        "acei": data.acei === 0 ? schema.acei0 : schema.acei1,
        "mra": data.mra === 0 ? schema.mra0 : schema.mra1,
        "diuretic": data.diuretic === 0 ? schema.diuretic0 : schema.diuretic1,
        "statin": data.statin === 0 ? schema.statin0 : schema.statin1,
        "pulmonaryEdema": data.pulmonaryEdema === 0 ? schema.pulmonaryEdema0 : schema.pulmonaryEdema1,
    }
    // console.log(calculatedDataObject)
    const keys = Object.keys(calculatedDataObject)
    let summation = 0
    keys.map(key => {
        const val = calculatedDataObject[key]
        summation += val
    })
    let pby1minusp = Math.exp((summation / 2.303))
    let onebyp = 1 + (1 / pby1minusp)
    let p = (1 / onebyp)
    return p.toFixed(5)

}
module.exports = calculate
// const schema = {
//     "_id": "62d70a5505a30fb092e52d84",
//     "intercept": -0.0932589,
//     "heartRate": 0.00843798,
//     "RVDysfunction": -0.307925,
//     "eGFR": -0.00891094,
//     "ProBNP": 0.0000509,
//     "age": 0.0189807,
//     "gender0": -0.255958,
//     "gender1": 0.164354,
//     "sinusRhythm0": 0.312448,
//     "sinusRhythm1": -0.404052,
//     "atrialFibrillation0": -0.404052,
//     "atrialFibrillation1": 0.312448,
//     "diabetes0": 0.00392601,
//     "diabetes1": -0.0955299,
//     "hyperTension0": -0.12945,
//     "hyperTension1": 0.0378465,
//     "chronicKidneyDisease0": 0.043021,
//     "chronicKidneyDisease1": -0.134625,
//     "acei0": -0.291185,
//     "acei1": 0.199581,
//     "mra0": -0.741114,
//     "mra1": 0.64951,
//     "diuretic0": -0.614009,
//     "diuretic1": 0.522405,
//     "statin0": -0.258259,
//     "statin1": 0.166655,
//     "pulmonaryEdema0": -0.307975,
//     "pulmonaryEdema1": 0.216371,
//     "__v": 0
// }
// const data = {
//     "email": "ravenklawgaming@gmail.com",
//     "intercept": 1,
//     "heartRate": 100,
//     "RVDysfunction": 1,
//     "eGFR": 71,
//     "ProBNP": 1160,
//     "age": 40,
//     "gender": 0,
//     "sinusRhythm": 1,
//     "atrialFibrillation": 0,
//     "diabetes": 0,
//     "hyperTension": 0,
//     "chronicKidneyDisease": 0,
//     "acei": 1,
//     "mra": 0,
//     "diuretic": 1,
//     "statin": 0,
//     "pulmonaryEdema": 1,
//     "_id": "62d7aaa7b67a0eb40e000c0c",
//     "__v": 0
// }
// console.log(calculate(data, schema))



// const calculatedDataObject = {
//     "intercept": schema.intercept * data.intercept,
//     "heartRate": schema.heartRate * data.heartRate,
//     "RVDysfunction": schema.RVDysfunction * data.RVDysfunction,
//     "eGFR": schema.eGFR * data.eGFR,
//     "ProBNP": schema.ProBNP * data.ProBNP,
//     "age": schema.age * data.age,
//     "gender": data.gender === 0 ? schema.gender0 * data.gender : schema.gender1 * data.gender,
//     "sinusRhythm": data.sinusRhythm === 0 ? schema.sinusRhythm0 * data.sinusRhythm : schema.sinusRhythm1 * data.sinusRhythm,
//     "atrialFibrillation": data.atrialFibrillation === 0 ? schema.atrialFibrillation0 * data.atrialFibrillation : schema.atrialFibrillation1 * data.atrialFibrillation,
//     "diabetes": data.diabetes === 0 ? schema.diabetes0 * data.diabetes : schema.diabetes1 * data.diabetes,
//     "hyperTension": data.hyperTension === 0 ? schema.hyperTension0 * data.hyperTension : schema.hyperTension1 * data.hyperTension,
//     "chronicKidneyDisease": data.chronicKidneyDisease === 0 ? schema.chronicKidneyDisease0 * data.chronicKidneyDisease : schema.chronicKidneyDisease1 * data.chronicKidneyDisease,
//     "acei": data.acei === 0 ? schema.acei0 * data.acei : schema.acei1 * data.acei,
//     "mra": data.mra === 0 ? schema.mra0 * data.mra : schema.mra1 * data.mra,
//     "diuretic": data.diuretic === 0 ? schema.diuretic0 * data.diuretic : schema.diuretic1 * data.diuretic,
//     "statin": data.statin === 0 ? schema.statin0 * data.statin : schema.statin1 * data.statin,
//     "pulmonaryEdema": data.pulmonaryEdema === 0 ? schema.pulmonaryEdema0 * data.pulmonaryEdema : schema.pulmonaryEdema1 * data.pulmonaryEdema,
// }