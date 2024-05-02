import React, { useState } from 'react'
// import logo from '../components/layout/Logo.png'
import { Form, Input, Button, message } from 'antd';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';


const AdminLogin = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitLoginHandler = async (values) => {
    // console.log(values);
    try {
      setLoading(true);
      const { data } = await axios.post('/users/adminLogin', values);
      console.log(data);
      message.success("Login Successful");
      localStorage.setItem('admin', JSON.stringify({ ...data.user, password: '', authCode: '' }));
      setLoading(false);
      navigate('/adminDashboard');
    }
    catch (error) {
      setLoading(false);
      // message.error("Error Registering Admin!");
      console.log(error);
    }
  }

  return (
    <>
      <Navbar/>
      <div className='LoginPage'>
        {/* <div className="Logo">
          <img src={logo} alt="loading" />
        </div> */}
        {loading && <Spinner />}
        <div className="LoginForm">
          <div className="LoginText">
            <h1 className='m-4 text-5xl text-[#20B486] font-bold'>ADMIN LOGIN</h1>
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
            className='px-4 py-5 w-100 items-center flex flex-col gap-4 bg-[#20B486] rounded-md'

            onFinish={submitLoginHandler}
          >
            <Form.Item label='Email' className='w-100' name='email' rules={[{ required: true, message: "Please enter Email" }]}>
              <Input type='email' />
            </Form.Item>

            <Form.Item label='Password' className='w-100' name='password' rules={[{ required: true, message: "Please enter Password" }]}>
              <Input type='password' />
            </Form.Item>

            <Form.Item label='Authentication Code' className='w-100' name='authCode' rules={[{ required: true, message: "Please enter Authentication Code Provided" }]}>
              <Input type='password' />
            </Form.Item>

            <Button className='my-3 w-100 bg-red-500 text-light' htmlType='submit'>Sign In</Button>

            <div className="adminLogin">
              <Button type='primary' className='bg-white text-dark'><Link to='/Login'><UserOutlined />Login as User</Link></Button>
              <Button type='primary' className='mx-2 bg-white text-dark'><Link to='/adminSignUp'><UserAddOutlined /> Register as Admin</Link></Button>
            </div>
          </Form>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default AdminLogin
