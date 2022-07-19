import React from 'react'

const ShowPatientDetails = ({ patients, search, colWidth }) => {
    let filteredList = patients ? patients.filter(patient => {
        return patient.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    }) : null
    const toRender = filteredList ? filteredList.length : 0
    return (
        <>
            {toRender ?
                filteredList.map((patient, idx) => {
                    return (
                        <div className={`col-lg-${colWidth} mb-2`} key={idx}>
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

export default ShowPatientDetails