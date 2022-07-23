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
