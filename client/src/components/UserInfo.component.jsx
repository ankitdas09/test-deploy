import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserInfo = ({ user, admin }) => {
    const navigate = useNavigate()
    return (
        <div className="col-md-4 py-2">
            <div className="card h-100">
                <div className="card-body">
                    {/* <h3 className="text-muted">Welcome, {user.name}</h3> */}
                    <p className="lead">{user.email}</p>
                    <p>admin : {admin ? 'true' : 'false'}</p>
                    {admin && <button className='btn btn-primary' onClick={() => navigate('/adminpanel')}>Open Admin Panel</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default UserInfo