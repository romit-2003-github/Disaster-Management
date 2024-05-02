import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import Navbar from '../components/layout/Navbar';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Footer from '../components/layout/Footer';

const SignUp = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post('/users/register', values)
      setLoading(false);
      message.success("Registration Successful");
      navigate('/login');
    }
    catch (error) {
      setLoading(false);
      message.error("Error Registering User!");
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     navigate('/');
  //   }
  // }, [navigate]);

  return (
    <>
      <Navbar/>
      <div className='LoginPage bg-[#FFFF] m-40'>
        {/* <div className="Logo">
          <img src={logo} alt="loading" />
        </div> */}
        {loading && <Spinner />}

        <div className="LoginForm">
          <div className="LoginText">
            <h1 className='m-3 text-5xl font-bold text-[#20B486]'>USER REGISTRATION</h1>
          </div>
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

          <Form layout='vertical'
            name="basic"
            className='p-5 items-center flex flex-col gap-4 bg-[#20B486] rounded-md w-100'
            onFinish={submitHandler}
          >
            <div className="form1 w-100">
              <Form.Item label='Name' name='name' rules={[{ required: true, message: "Please enter your Name" }]}>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Email' name='email' rules={[{ required: true, message: "Please enter Email" }]}>
                <Input type='email' />
              </Form.Item>

              <Form.Item label='Password' name='password' rules={[{ required: true, message: "Please enter Password" }]}>
                <Input type='password' />
              </Form.Item>
            </div>

            <div className="form2 w-100">
              <Form.Item label='Phone No.' name='phoneno' rules={[{ required: true, message: "Please enter your Phone No." }]}>
                <Input type='text' />
              </Form.Item>

              <Form.Item label='Address' name='address' rules={[{ required: true, message: "Please enter your Address" }]}>
                <Input type='text' />
              </Form.Item>


              <button className='btn btn-danger my-4 w-100' htmltype='submit' >Sign In</button>


            </div>

            <div className="adminLogin">
              <Button type='primary' className='bg-[#FFF] text-dark'><Link to='/Login'><UserOutlined />Login as User</Link></Button>
              <Button type='primary' className='mx-2 bg-[#FFF] text-dark'><Link to='/adminSignUp'><UserAddOutlined />Register as Admin</Link></Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SignUp
