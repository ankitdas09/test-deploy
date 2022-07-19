import React from 'react'
const NavBar = ({ handleLogout, user, admin }) => {
    return (
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand">Patient Record</a>
                {/* <form class="d-flex" role="search"> */}
                <div>
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