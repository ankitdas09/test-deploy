import React, { useState } from 'react'
import useInput from '../hooks/useInput'

import { addNewUser } from '../api'

const AddUser = ({ refresh }) => {
    const email = useInput('')
    const [error, setError] = useState(null)
    const handleSubmit = async () => {
        const resp = await addNewUser(email.value)
        console.log(resp)
        if (resp.error === true) {
            setError(resp.message)
        } else {
            alert('User Added')
            email.clear()
            setError(null)
            refresh()
        }
    }
    return (
        <>
            <div className="col-12 mb-2">
                <div className="card">
                    <div className="card-body">
                        <p className="text-danger">{error && error}</p>
                        <h5 className="card-title">Add New User</h5>
                        <div className="form">
                            <form onSubmit={e => {
                                e.preventDefault()
                                handleSubmit()
                            }}>
                                <label htmlFor='email' className="form-label">Email</label>
                                <input name='email' type="email" className="form-control" id='email' value={email.value} onChange={email.onChange} required />
                                <button className="btn btn-primary my-2">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser