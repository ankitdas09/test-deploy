import React, { useEffect, useState } from 'react'
import { getSchema, postSchema, getResults, getAllPatients, getAllUsers, } from '../api'
import { Link } from 'react-router-dom'
import ShowPatientDetails from '../components/ShowPatientDetails.component'
import AddUser from '../components/AddUser.component'
import AddAdmin from '../components/AddAdmin.component'
import Statistics from '../components/Statistics.component'
import ShowAllUsers from '../components/ShowAllUsers.component'
const AdminPage = ({ user }) => {

    const [data, setData] = useState(null)
    const [keys, setKeys] = useState(null)
    const [results, setResults] = useState(null)
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const handleGetSchema = async () => {
            const resp = await getSchema()
            setData(resp)
            // console.log(Object.keys(resp))
            const keys = Object.keys(resp)
            setKeys(keys)
        }
        handleGetSchema()
    }, [])

    useEffect(() => {
        const handleGetResults = async () => {
            const resp = await getResults()
            setResults(resp)
        }
        handleGetResults()
    }, [])

    useEffect(() => {
        const handleGetAllUsers = async () => {
            const resp = await getAllUsers()
            setUsers(resp)
        }
        handleGetAllUsers()
    }, [])


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handlePost = async () => {
        const resp = await postSchema(data)
        if (resp.error) {
            setError(resp.message ? resp.message : 'Error')
            alert(resp.message ? resp.message : 'Error')
        } else {
            alert('Updated')
            setError(null)
        }
    }

    const refreshUsers = async () => {
        const resp = await getAllUsers()
        setUsers(resp)
    }

    return (
        <div className='container'>
            <Link to='/' className='btn btn-outline-secondary my-3'>Go Back</Link>
            <p className="display-6">Admin Panel</p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <AddUser refresh={refreshUsers} />
                        <Statistics results={results} />
                        {/* <AddAdmin /> */}
                    </div>
                </div>
                {data ?
                    <div className="col-lg-6">
                        <div className="card" >
                            <p className="lead text-danger text-center">
                                {error && error}
                            </p>
                            <div className="card-body">
                                <h5 className="card-title">Update Schema for Index Calculation</h5>
                                <div className="mb-3">
                                    <div className="row">
                                        {keys && keys.map((key, idx) => {
                                            return (

                                                <div className="col-md-4 my-2" key={idx}>
                                                    <label htmlFor={`${key}`} className="form-label">{key}</label>
                                                    <input name={key} type="text" className="form-control" id={`${key}`} value={data[key]} onChange={handleChange} />
                                                </div>

                                            )
                                        })}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-success px-5 mt-3" onClick={handlePost}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : 'loading...'}
            </div>
            <div className="row">
                <ShowAllUsers users={users} />

            </div>
        </div>
    )
}

export default AdminPage