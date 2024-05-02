import React, { useState, useEffect } from 'react'
// import logo from '../components/layout/Logo.png'
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
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
      <Navbar />
      <div className='LoginPage bg-[#FFFF]'>
        {/* <div className="Logo">
          <img src={logo} alt="loading" />
        </div> */}

        <div className="LoginForm gap-10">
          <div className="LoginText ">
            <h1 className='text-5xl text-[#20B486] font-bold'>LOGIN</h1>
          </div>
        </div>

        <Form layout='vertical'
          name="basic"
          onFinish={submitLoginHandler}
          className='items-center flex flex-col gap-4 bg-[#20B486] rounded-md'
          style={{ padding: '50px' }}
        >
          <div className="loginButtons my-4">
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
          <Form.Item label='Email' className='w-100' name='email' rules={[{ required: true, message: "Please enter Email" }]}>
            <Input type='email' className='rounded-md' />
          </Form.Item>

          <Form.Item label='Password' className='w-100' name='password' rules={[{ required: true, message: "Please enter Password" }]}>
            <Input type='password' className='rounded-md' />
          </Form.Item>

          <Button className='my-3 w-100 bg-red-600 text-light' htmlType='submit'>Sign In</Button>
          
          <div className="adminLogin">
            <Button type='primary' className='bg-[#FFFFFF] text-dark'><Link to='/adminLogin'><UserOutlined />Login as Admin</Link></Button>
            <Button type='primary' className='mx-2 bg-[#FFFFFF] text-dark'><Link to='/register'><UserAddOutlined /> New User? Register Here</Link></Button>
          </div>
        </Form>
      </div>
      <Footer/>
    </>
  )
}

export default Login
