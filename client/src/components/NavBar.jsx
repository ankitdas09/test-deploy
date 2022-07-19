import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = ({ handleLogout, user, admin }) => {
    return (
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand">Patient Record</a>
                {/* <form class="d-flex" role="search"> */}
                <div>
                    {admin &&
                        <Link to='/adminpanel' className='btn btn-outline-success me-2'>Admin Panel</Link>
                    }
                    {user &&
                        <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>
                    }
                </div>
                {/* </form> */}
            </div>
        </nav >
    )
}

export default NavBar