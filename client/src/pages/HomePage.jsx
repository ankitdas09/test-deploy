import PatientForm from "../components/PatientForm.component"
import UserInfo from "../components/UserInfo.component"

const HomePage = ({ user, admin }) => {

    return (
        <div className="container">
            {user ?
                <div className="row  justify-content-center">
                    <PatientForm user={user} />
                    <UserInfo user={user} admin={admin} />
                </div> : <Link to='/login' className="btn btn-secondary">Login</Link>
            }
        </div >

    )
}

export default HomePage