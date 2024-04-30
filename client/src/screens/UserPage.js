import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { Card } from 'antd';
import reportedDisaster from '../images/reportedDisaster.jpeg';
import danger from '../images/danger.png';
import volunteer from '../images/volunteer.png';
import maps from '../images/maps.png';
const UserPage = () => {

    const [loginUser, setLoginUser] = useState('');
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setLoginUser(user);
        }
    }, []);

    return (
        <>
        <div className="userDash">
            <Header loginUser={loginUser} />
            <div className="userPage">
                <Card className='userCards' title="Report a Disaster" bordered={true} style={{ width: "300px" }}>
                    {/* <h1>Report Disaster</h1> */}
                    <img src={reportedDisaster} alt="Loading" />
                    <button className='btn btn-danger'>Click Here</button>
                </Card>
                <Card className='userCards' title='Reported Disasters' bordered={true} style={{ width: "300px" }}>
                    {/* <h1>Report Disaster</h1> */}
                    <img src={danger} alt="Loading" />
                    <button className='btn btn-danger'>Click Here</button>
                </Card>
                <Card className='userCards' title='Volunteer Registration' bordered={true} style={{ width: "300px" }}>
                    {/* <h1>Report Disaster</h1> */}
                    <img src={volunteer} alt="Loading" />
                    <button className='btn btn-danger'>Click Here</button>
                </Card>
                <Card className='userCards' title='Maps' bordered={true} style={{ width: "300px" }}>
                    {/* <h1>Report Disaster</h1> */}
                    <img src={maps} alt="Loading" />
                    <button className='btn btn-danger'>Click Here</button>
                </Card>
            </div>
        </div>
        </>
    )
}

export default UserPage
