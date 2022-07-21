import React from 'react'

const Feedback = ({ index, handleReset }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card my-4">
                        <div className="card-body">
                            <p className="display-5 text-muted">Submitted</p>
                            <p className="display-6">LR Coefficient: <span className='text-success'>{index}</span></p>
                            <p className="text-muted">We are still in testing phase, this result is not supposed to be taken to a doctor for emergency checkup. Your data will be collected for research purposes.</p>
                            <button className='btn btn-primary' onClick={handleReset}>Submit again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback