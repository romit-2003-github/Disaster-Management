import React from 'react'
import {useNavigate} from 'react-router-dom';

const VolunteerPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="userDash">
                <h1>Thank you for registering as a volunteer, we will contact you shortly.</h1>
                <button className='btn btn-primary' onClick={() => navigate('/UserDashboard')}>Back to Main</button>
            </div>
        </>
    )
}

export default VolunteerPage
