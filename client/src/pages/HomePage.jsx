import PatientForm from "../components/PatientForm.component"
import UserInfo from "../components/UserInfo.component"

const HomePage = ({ user, admin }) => {

    return (
        <div className="container">
            <div className="row  justify-content-center">
                <PatientForm user={user} />
                <UserInfo user={user} admin={admin} />
            </div>
        </div>
    )
}

export default HomePage