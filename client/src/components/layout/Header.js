import React from 'react'

import { Link } from 'react-router-dom';
// import { Button } from 'antd';
import { LoginOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
const Header = ({ loginUser }) => {

    // const loggedInUser = JSON.parse(loginUser);
    return (
        <>
            <div className="frontPage">
                <div className="navbar">
                    <div className="logo">
                        <h2><b><i>CrisisChain</i></b></h2>
                        {/* <img src={logo} alt="loading" /> */}
                    </div>
                    <div className="navigation">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact Us</a></li>
                            {/* <li>{loggedInUser.name}</li> */}
                        </ul>
                    </div>
                    <div className="authButtons">
                        {loginUser ? <button className='btn authB'>
                            <Link style={{ textDecoration: 'none', color: "white" }} to='/'>
                                Logout <LogoutOutlined /></Link></button>
                            :
                            <button className='btn authB'>
                                <Link style={{ textDecoration: 'none', color: "white" }} to='/login'><LoginOutlined />
                                    Sign In</Link>
                            </button>
                        }

                        {!loginUser && <button className='btn authB'>
                            <Link style={{ textDecoration: 'none', color: "white" }} to='/register'><UserAddOutlined />
                                SignUp</Link>
                        </button>}
                        {/* <button className='btn btn-danger'>
                        <UserOutlined />
                        Login as <br/> Admin
                    </button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
