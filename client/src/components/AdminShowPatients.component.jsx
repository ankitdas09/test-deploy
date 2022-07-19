import React from 'react'

const AdminShowPatients = ({ patients, search }) => {
    let filteredList = patients.filter(patient => {
        return patient.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    return (
        <>
            {filteredList.length ?
                filteredList.map((patient, idx) => {
                    return (
                        <div className='col-lg-6 mb-2'>
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">
                                            <p>
                                                {patient.name}
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <p className="text-muted">
                                                <strong>
                                                    {patient.age}
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <p className="text-muted">
                                                <strong>
                                                    {patient.height}
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <p className="text-muted">
                                                <strong>
                                                    {patient.weight}
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <p className="text-muted">
                                                <strong>
                                                    {patient.bloodSugar}
                                                </strong>
                                            </p>
                                        </div>
                                        <div className="col-2">
                                            <p className="text-success">
                                                <strong>
                                                    {patient.index}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                : <div className="container mb-5">
                    <p className="text-lead">No records found</p>
                </div>
            }
        </>
    )
}

export default AdminShowPatients