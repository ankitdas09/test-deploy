import React from 'react'

const Feedback = ({ index, handleReset }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card my-4">
                        <div className="card-body">
                            <p className="display-5 text-muted">Result</p>
                            <p className="lead">
                                {index >= 0.5 ?
                                    < span className='text-danger'>
                                        For the Input Values This Logistic Regression Model predicts HFpEF as <strong>Positive</strong>
                                    </span>
                                    :
                                    <span className="text-success">
                                        For the Input Values This Logistic Regression Model predicts HFpEF as <strong>Negative</strong>
                                    </span>
                                }
                            </p>
                            {/* <p className="text-muted">We are still in testing phase, this result is not supposed to be taken to a doctor for emergency checkup. Your data will be collected for research purposes.</p> */}
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col' className='text-muted'>Model Performance : Logistic Regression</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-muted'>Sensitivity</td>
                                        <td>0.76</td>
                                    </tr>
                                    <tr>
                                        <td className='text-muted'>Specificity</td>
                                        <td>0.73</td>
                                    </tr>
                                    <tr>
                                        <td className='text-muted'>Positive Pred Value</td>
                                        <td>0.74</td>
                                    </tr>
                                    <tr>
                                        <td className='text-muted'>Negative Pred Value</td>
                                        <td>0.74</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn btn-primary' onClick={handleReset}>Submit again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Feedback