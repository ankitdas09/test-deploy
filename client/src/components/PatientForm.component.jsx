import useInput from "../hooks/useInput";
import useNumberInput from "../hooks/useNumberInput";
import React, { useState, useEffect } from 'react'
import { postForm } from '../api';
import Feedback from "./Feedback.component";

const PatientForm = ({ user }) => {

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (data) => {
        data.email = user.email
        const resp = await postForm(data)
        // console.log(resp)
        if (resp.data.error) {
            if (resp.data.error === true) {
                alert('Something went wrong! Please try again.')
            }
        } else {
            // console.log(resp)
            setSubmitted(resp.index)
        }
    }

    const handleReset = () => {
        setSubmitted(null)
    }

    return (
        <>
            {!submitted ?
                < form onSubmit={(e) => {
                    e.preventDefault()
                    const formdata = new FormData(e.target)
                    const data = Object.fromEntries(formdata.entries())
                    // console.log(data)
                    handleSubmit(data)
                    const inputs = document.querySelectorAll('input');

                    inputs.forEach(input => {
                        input.value = '';
                        input.checked = false
                    });

                }}>
                    <h3 className="text-muted text-md-start text-center my-4">Submit Data</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card my-2">
                                <div className="card-body">
                                    <div className="row justify-content-start">
                                        <div className="col-md-6 col-lg-6">
                                            <div class="form-group mb-2">
                                                <label for="intercept">Intercept</label>
                                                <input name="intercept" type="number" class="form-control mt-2" id="intercept" placeholder="Intercept" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div class="form-group mb-2">
                                                <label for="heartRate">Heart Rate</label>
                                                <input name="heartRate" type="number" class="form-control mt-2" id="heartRate" placeholder="Heart Rate" min="0" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div class="form-group mb-2">
                                                <label for="RVDysfunction">RV Dysfunction (%) TAPSE</label>
                                                <input name="RVDysfunction" type="number" class="form-control mt-2" id="RVDysfunction" placeholder="RV Dysfunction (%) TAPSE" min="0" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div class="form-group mb-2">
                                                <label for="eGFR">eGFR</label>
                                                <input name="eGFR" type="number" class="form-control mt-2" id="eGFR" placeholder="eGFR" min="0" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div class="form-group mb-2">
                                                <label for="ProBNP">ProBNP</label>
                                                <input name="ProBNP" type="number" class="form-control mt-2" id="ProBNP" placeholder="ProBNP" min="0" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div class="form-group mb-2">
                                                <label for="age">Age</label>
                                                <input name="age" type="number" class="form-control mt-2" id="age" placeholder="Age" min="1" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">

                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Gender: </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="gender0" value="0" required />
                                                    <label class="form-check-label" for="gender0">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="gender1" value="1" required />
                                                    <label class="form-check-label" for="gender1">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Sinus Rhythm : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="sinusRhythm" id="sinusRhythm0" value="0" required />
                                                    <label class="form-check-label" for="sinusRhythm0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="sinusRhythm" id="sinusRhythm1" value="1" required />
                                                    <label class="form-check-label" for="sinusRhythm1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Atrial Fibrillation : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="atrialFibrillation" id="atrialFibrillation0" value="0" required />
                                                    <label class="form-check-label" for="atrialFibrillation0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="atrialFibrillation" id="atrialFibrillation1" value="1" required />
                                                    <label class="form-check-label" for="atrialFibrillation1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Diabetes : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="diabetes" id="diabetes0" value="0" required />
                                                    <label class="form-check-label" for="diabetes0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="diabetes" id="diabetes1" value="1" required />
                                                    <label class="form-check-label" for="diabetes1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Hypertension : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="hyperTension" id="hyperTension0" value="0" required />
                                                    <label class="form-check-label" for="hyperTension0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="hyperTension" id="hyperTension1" value="1" required />
                                                    <label class="form-check-label" for="hyperTension1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">CKD with Grade : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="chronicKidneyDisease" id="chronicKidneyDisease0" value="0" required />
                                                    <label class="form-check-label" for="chronicKidneyDisease0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="chronicKidneyDisease" id="chronicKidneyDisease1" value="1" required />
                                                    <label class="form-check-label" for="chronicKidneyDisease1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">ACEi or ARB : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="acei" id="acei0" value="0" required />
                                                    <label class="form-check-label" for="acei0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="acei" id="acei1" value="1" required />
                                                    <label class="form-check-label" for="acei1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">MRA : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="mra" id="mra0" value="0" required />
                                                    <label class="form-check-label" for="mra0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="mra" id="mra1" value="1" required />
                                                    <label class="form-check-label" for="mra1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Diuretic : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="diuretic" id="diuretic0" value="0" required />
                                                    <label class="form-check-label" for="diuretic0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="diuretic" id="diuretic1" value="1" required />
                                                    <label class="form-check-label" for="diuretic1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Statin : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="statin" id="statin0" value="0" required />
                                                    <label class="form-check-label" for="statin0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="statin" id="statin1" value="1" required />
                                                    <label class="form-check-label" for="statin1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="radio-container my-2">
                                                <div className="me-3 d-inline">
                                                    <label htmlFor="">Pulmonary edema : </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="pulmonaryEdema" id="pulmonaryEdema0" value="0" required />
                                                    <label class="form-check-label" for="pulmonaryEdema0">Negative</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="pulmonaryEdema" id="pulmonaryEdema1" value="1" required />
                                                    <label class="form-check-label" for="pulmonaryEdema1">Positive</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">

                                            <button className="btn btn-primary my-2">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </form>
                : <Feedback index={submitted} handleReset={handleReset} />}
        </>
    )
}
export default PatientForm