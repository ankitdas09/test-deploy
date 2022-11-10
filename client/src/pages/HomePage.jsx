import PatientForm from "../components/PatientForm.component"

const HomePage = ({ user, admin }) => {
    return (
        <div className="container">
            <PatientForm user={user} />
        </div>
    )
}

export default HomePage