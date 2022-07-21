import React from 'react'

const ShowAllUsers = ({ users }) => {
    return (
        <>
            {users ?
                <div className="col-12 my-5">
                    <p className="display-4">All Users</p>
                    <div className="row">
                        {users.map(user => {
                            return (
                                <div className="col-md-6">
                                    <div className="card mb-2">
                                        <div className="card-body h-100">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <div className='text-muted'>User</div>
                                                    <p className="lead">{user.email}</p>
                                                </div>
                                                <div className="col-md-4 text-muted text-start text-md-end">
                                                    Records Submitted
                                                    <p className='lead'>
                                                        <strong>
                                                            {user.submitted}
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                : 'loading users'}
        </>
    )
}

export default ShowAllUsers