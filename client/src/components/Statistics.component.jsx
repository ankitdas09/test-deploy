import React from 'react'

const Statistics = ({ results }) => {
    return (
        <div className="col-12 my-2">
            <p className="display-4 text-muted">Data Statistics</p>
            {results &&
                <div className="row">
                    <div className="col-6 mb-3">
                        <div className="card h-100">
                            <div className="card-body h-100">
                                <p className='display-2 text-muted'><strong>
                                    {results.total}
                                </strong>
                                </p>
                                <p className='lead'>Total Submissions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="card h-100">
                            <div className="card-body h-100">
                                <p className='display-2 text-danger'><strong>
                                    {results.positive}
                                </strong>
                                </p>
                                <p className='lead'>Positive Submissions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="card h-100">
                            <div className="card-body h-100">
                                <p className='display-2 text-success'><strong>
                                    {results.negative}
                                </strong>
                                </p>
                                <p className='lead'>Negative Submissions</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-6 mb-3">
                        <div className="card h-100">
                            <div className="card-body h-100">
                                <p className='display-2 text-danger'><strong>
                                    {results.positivePercentage.toFixed(2)}
                                </strong>
                                </p>
                                <p className='lead'>Positive Percentage</p>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </div >
    )
}

export default Statistics