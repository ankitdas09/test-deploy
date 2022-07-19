import useInput from "../hooks/useInput";
import useNumberInput from "../hooks/useNumberInput";
import React, { useState } from 'react'
import { postForm } from '../api';

const PatientForm = ({ user }) => {
    const name = useInput()
    const age = useInput()
    const weight = useInput()
    const height = useInput()
    const bloodSugar = useInput()

    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email: user.email, name: name.value, age: age.value, weight: weight.value, height: height.value, bloodSugar: bloodSugar.value }
        const resp = await postForm(data)
        setError(resp.message ? resp.message : null)
        console.log(resp)
        if (!resp.error) {
            name.clear()
            age.clear()
            weight.clear()
            height.clear()
            bloodSugar.clear()
            alert('Patient Added')
        }

    }

    return (
        <div className="col-md-8 py-2">
            <div className="card" >
                <p className="lead text-danger text-center">
                    {error && `Error : ${error}`}
                </p>
                <div className="card-body">
                    <h5 className="card-title">Add New Patient</h5>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={name.value} onChange={name.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Age" value={age.value} onChange={age.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Weight</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Weight" value={weight.value} onChange={weight.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Height</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Height" value={height.value} onChange={height.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Blood Sugar</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Blood Sugar" value={bloodSugar.value
                        } onChange={bloodSugar.onChange} />
                    </div>
                    <button type="button" className="btn btn-success px-5 mt-3" onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default PatientForm