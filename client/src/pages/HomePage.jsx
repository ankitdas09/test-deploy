import { useState, useEffect } from "react"
import PatientForm from "../components/PatientForm.component"
import UserInfo from "../components/UserInfo.component"
import ShowMyPatients from "../components/ShowMyPatients.component"
import { getMyPatients } from "../api"

const HomePage = ({ user, admin }) => {
    console.log(admin)
    const [myPatients, setMyPatients] = useState(null)
    useEffect(() => {
        const handleGetMyPatients = async () => {
            const resp = await getMyPatients()
            setMyPatients(resp)
        }
        handleGetMyPatients()
    }, [])
    return (

        <div className="container">
            {user && <h4 className="text-muted my-4">Welcome, {user.name}</h4>}
            <div className="row  justify-content-center">
                <PatientForm user={user} />
                <ShowMyPatients myPatients={myPatients} />
            </div>
            <div className="container p-0">
                <UserInfo user={user} admin={admin} />
            </div>
        </div>
    )
}

export default HomePage