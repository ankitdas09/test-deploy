import React from 'react'
import ShowPatientDetails from '../components/ShowPatientDetails.component'
const ShowMyPatients = ({ myPatients }) => {
    return (
        // <div className='row'>
        <div className="d-none d-sm-block col-lg-8 py-2">
            <div className="card h-100">
                <div className="card-body">
                    <h4 className=''>Your Patients : </h4>
                    <div className="card mb-2">
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
                    < ShowPatientDetails patients={myPatients} search='' colWidth={12} />
                </div>
            </div>
        </div>
    )
}

export default ShowMyPatients