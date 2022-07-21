import React from 'react'

import useInput from '../hooks/useInput'
const AddAdmin = () => {

    const email = useInput('')
    const handleSubmit = () => {

    }
    return (

        <>
            <div className="col-12 mb-2">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={e => e.preventDefault()}>
                            <h5 className="card-title">Add New Admin</h5>
                            <div className="form">
                                <label htmlFor='email' className="form-label">Email</label>
                                <input name='email' type="email" className="form-control" id='email' value={email.value} onChange={email.onChange} />
                            </div>
                            <button className="btn btn-danger my-2">Add Admin</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AddAdmin