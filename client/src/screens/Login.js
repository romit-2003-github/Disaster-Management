import React, { useState, useEffect } from 'react'
// import logo from '../components/layout/Logo.png'
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
// import Header from '../components/layout/Header';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitLoginHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', values)
      message.success("Login Successful");
      localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }));
      setLoading(false);
      navigate('/userDashboard');
    }
    catch (error) {
      setLoading(false);
      localStorage.removeItem('user');
      message.error("Error Logging In!");
      console.log(error);
    }
  }

  return (
    <>
      {/* <Header /> */}
      <div className='LoginPage'>
        {/* <div className="Logo">
          <img src={logo} alt="loading" />
        </div> */}

        <div className="LoginForm">
          <div className="LoginText">
            <h1 style={{ fontSize: "3rem", color: "whitesmoke" }} className='mt-3'><b>LOGIN</b></h1>
          </div>
          <div className="loginButtons">
            <button className='btn authB px-4' style={{ backgroundColor: "blue" }}>
              <a style={{ textDecoration: 'none', color: "white" }} href='/'><FacebookOutlined /> Facebook</a>
            </button>
            <button className='btn authB px-4' style={{ backgroundColor: "lightblue" }}>
              <a style={{ textDecoration: 'none', color: "white" }} href='/'><TwitterOutlined /> Twitter</a>
            </button>
            <button className='btn authB px-4'>
              <a style={{ textDecoration: 'none', color: "white" }} href='/'><GoogleOutlined /> Google</a>
            </button>
          </div>

          <Form layout='vertical'
            name="basic"
            onFinish={submitLoginHandler}
            style={{ padding: '20px', width: '100%' }}
          >
            <Form.Item label='Email' name='email' rules={[{ required: true, message: "Please enter Email" }]}>
              <Input type='email' style={{ backgroundColor: 'transparent', borderRadius: "20px", border: "2px solid white" }} />
            </Form.Item>

            <Form.Item label='Password' name='password' rules={[{ required: true, message: "Please enter Password" }]}>
              <Input type='password' style={{ backgroundColor: "transparent", borderRadius: "20px", border: "2px solid white" }} />
            </Form.Item>

            <Form.Item>
              <Button className='my-3' htmlType='submit' style={{ width: "100%", borderRadius: "20px", backgroundColor: "red", color: "white", border: "none" }}>Sign In</Button>
            </Form.Item>
          </Form>
          <div className="adminLogin">
            <Button type='primary'><Link to='/adminLogin'><UserOutlined />Login as Admin</Link></Button>
            <Button type='primary' className='mx-2'><Link to='/register'><UserAddOutlined /> New User? Register Here</Link></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
