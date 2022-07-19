import React, { useEffect, useState } from 'react'
import { getSchema, postSchema, getAllPatients } from '../api'
import { Link } from 'react-router-dom'
import AdminShowPatients from '../components/AdminShowPatients.component'
const AdminPage = ({ user }) => {

    const [data, setData] = useState(null)
    const [patients, setPatients] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const handleGetSchema = async () => {
            const resp = await getSchema()
            setData({
                age: resp.age,
                weight: resp.weight,
                height: resp.height,
                bloodSugar: resp.bloodSugar
            })
        }
        handleGetSchema()
    }, [])

    useEffect(() => {
        handleRefresh()
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleRefresh = async () => {
        const resp = await getAllPatients()
        setPatients(resp)
    }

    const handlePost = async () => {
        const resp = await postSchema(data)
        if (resp.error) {
            setError(resp.message ? resp.message : 'Error')
        } else {
            alert('Updated')
            handleRefresh()
            setError(null)
        }
    }

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className='container'>
            <Link to='/' className='btn btn-outline-secondary my-3'>Go Back</Link>
            <p className="display-6">Admin Panel</p>
            {data ?
                <div className="row">
                    <div className="col-md-6">

                        <div className="card" >
                            <p className="lead text-danger text-center">
                                {error && error}
                            </p>
                            <div className="card-body">
                                <h5 className="card-title">Update Schema for Index Calculation</h5>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
                                    <input name="age" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={data.age} onChange={handleChange} />
                                    <label htmlFor="exampleFormControlInput1" className="form-label">weight</label>
                                    <input name="weight" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={data.weight} onChange={handleChange} />
                                    <label htmlFor="exampleFormControlInput1" className="form-label">height</label>
                                    <input name="height" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={data.height} onChange={handleChange} />
                                    <label htmlFor="exampleFormControlInput1" className="form-label">bloodSugar</label>
                                    <input name="bloodSugar" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={data.bloodSugar} onChange={handleChange} />
                                </div>

                                <button type="button" className="btn btn-success px-5 mt-3" onClick={handlePost}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                : 'loading...'}
            {patients ?
                <div className="row">
                    <h3 className='mt-4'>All Records : </h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 text-center my-3">
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">Search</span>
                                    <input type="text" className="form-control" placeholder="Search by name" aria-label="Username" aria-describedby="addon-wrapping" value={search} onChange={handleSearch} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">Name</div>
                                        <div className="col-2">Age</div>
                                        <div className="col-2">Height (cm)</div>
                                        <div className="col-2">Weight (kg)  </div>
                                        <div className="col-2">Blood Sugar</div>
                                        <div className="col-2">Index</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-2 d-none d-lg-block">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">Name</div>
                                        <div className="col-2">Age</div>
                                        <div className="col-2">Height (cm)</div>
                                        <div className="col-2">Weight (kg)  </div>
                                        <div className="col-2">Blood Sugar</div>
                                        <div className="col-2">Index</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <AdminShowPatients patients={patients} search={search} />
                    </div>
                </div>
                : 'no data found'}

        </div>
    )
}

export default AdminPage