import useInput from "../hooks/useInput";
import useNumberInput from "../hooks/useNumberInput";
import React, { useState, useEffect } from "react";
import { postForm } from "../api";
import Feedback from "./Feedback.component";

const PatientForm = ({ user }) => {
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (data) => {
		data.email = user.email;
		const resp = await postForm(data);
		if (resp.data.error) {
			if (resp.data.error === true) {
				setError(resp.data.message);
			}
		} else {
			setError(false);
			setSubmitted(resp.index);
		}
	};

	const handleReset = () => {
		setSubmitted(null);
	};

	return (
		<>
			{!submitted ? (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const formdata = new FormData(e.target);
						const data = Object.fromEntries(formdata.entries());
						console.log(data);
						handleSubmit(data);
						const inputs = document.querySelectorAll("input");

						inputs.forEach((input) => {
							input.value = "";
							input.checked = false;
						});
					}}
				>
					<h3 className="text-muted text-md-start text-center my-4">
						Submit Data
					</h3>
					<div className="row">
						<div className="col-lg-8">
							<div className="card my-2">
								<div className="card-body">
									{error && (
										<p className="lead text-danger">
											<strong>{error}</strong>
										</p>
									)}
									<div className="row justify-content-start">
										<div className="col-md-6 col-lg-6">
											<div className="form-group mb-2">
												<label htmlFor="heartRate">
													Heart Rate
												</label>
												<input
													name="heartRate"
													type="number"
													className="form-control mt-2"
													id="heartRate"
													placeholder="Heart Rate"
													max="188"
													min="50"
													required
												/>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="form-group mb-2">
												<label htmlFor="RVDysfunction">
													RV Dysfunction (%) TAPSE
												</label>
												<input
													name="RVDysfunction"
													type="number"
													className="form-control mt-2"
													id="RVDysfunction"
													placeholder="RV Dysfunction (%) TAPSE"
													step="0.001"
													max="3"
													min="1"
													required
												/>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="form-group mb-2">
												<label htmlFor="eGFR">
													eGFR
												</label>
												<input
													name="eGFR"
													type="number"
													className="form-control mt-2"
													id="eGFR"
													placeholder="eGFR"
													max="240"
													min="4"
													required
												/>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="form-group mb-2">
												<label htmlFor="ProBNP">
													ProBNP
												</label>
												<input
													name="ProBNP"
													type="number"
													className="form-control mt-2"
													id="ProBNP"
													placeholder="ProBNP"
													max="35000"
													min="15"
													required
												/>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="form-group mb-2">
												<label htmlFor="age">Age</label>
												<input
													name="age"
													type="number"
													className="form-control mt-2"
													id="age"
													placeholder="Age"
													max="91"
													min="22"
													required
												/>
											</div>
										</div>
										<div className="col-md-6 col-lg-6"></div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Gender:{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="gender"
														id="gender0"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="gender0"
													>
														Male
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="gender"
														id="gender1"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="gender1"
													>
														Female
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Atrial Fibrillation :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="atrialFibrillation"
														id="atrialFibrillation0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="atrialFibrillation0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="atrialFibrillation"
														id="atrialFibrillation1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="atrialFibrillation1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Diabetes :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="diabetes"
														id="diabetes0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="diabetes0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="diabetes"
														id="diabetes1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="diabetes1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Hypertension :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="hyperTension"
														id="hyperTension0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="hyperTension0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="hyperTension"
														id="hyperTension1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="hyperTension1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														CKD with Grade :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="chronicKidneyDisease"
														id="chronicKidneyDisease0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="chronicKidneyDisease0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="chronicKidneyDisease"
														id="chronicKidneyDisease1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="chronicKidneyDisease1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														ACEi or ARB :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="acei"
														id="acei0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="acei0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="acei"
														id="acei1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="acei1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														MRA :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="mra"
														id="mra0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="mra0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="mra"
														id="mra1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="mra1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Diuretic :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="diuretic"
														id="diuretic0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="diuretic0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="diuretic"
														id="diuretic1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="diuretic1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Statin :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="statin"
														id="statin0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="statin0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="statin"
														id="statin1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="statin1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<div className="radio-container my-2">
												<div className="me-3 d-inline">
													<label htmlFor="">
														Pulmonary edema :{" "}
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="pulmonaryEdema"
														id="pulmonaryEdema0"
														value="0"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="pulmonaryEdema0"
													>
														Negative
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input
														className="form-check-input"
														type="radio"
														name="pulmonaryEdema"
														id="pulmonaryEdema1"
														value="1"
														required
													/>
													<label
														className="form-check-label"
														htmlFor="pulmonaryEdema1"
													>
														Positive
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<button className="btn btn-primary my-2">
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* </div> */}
				</form>
			) : (
				<Feedback index={submitted} handleReset={handleReset} />
			)}
		</>
	);
};
export default PatientForm;
