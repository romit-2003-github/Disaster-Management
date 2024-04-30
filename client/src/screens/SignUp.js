import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

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
      <div className='LoginPage'>
        {/* <div className="Logo">
          <img src={logo} alt="loading" />
        </div> */}
        {loading && <Spinner/>}

        <div className="LoginForm">
          <div className="LoginText">
            <h1 style={{ fontSize: "3rem", color: "whitesmoke" }} className='mt-3'><b>REGISTRATION</b></h1>
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
            style={{ padding: '20px', width: '100%' }}
            className='RegisterForm'
            onFinish={submitHandler}
          >
            <div className="form1">
              <Form.Item label='Name' name='name' rules={[{ required: true, message: "Please enter your Name" }]}>
                <Input type='text' style={{ backgroundColor: 'gray', color: "white", opacity: "0.5", borderRadius: "20px", border: "2px solid white" }} />
              </Form.Item>

              <Form.Item label='Email' name='email' rules={[{ required: true, message: "Please enter Email" }]}>
                <Input type='email' style={{ backgroundColor: 'gray', color: "white", opacity: "0.5", borderRadius: "20px", border: "2px solid white" }} />
              </Form.Item>

              <Form.Item label='Password' name='password' rules={[{ required: true, message: "Please enter Password" }]}>
                <Input type='password' style={{ backgroundColor: "gray", color: "white", opacity: "0.5", borderRadius: "20px", border: "2px solid white" }} />
              </Form.Item>
            </div>

            <div className="form2">
              <Form.Item label='Phone No.' name='phoneno' rules={[{ required: true, message: "Please enter your Phone No." }]}>
                <Input type='text' style={{ backgroundColor: "gray", color: "white", opacity: "0.5", borderRadius: "20px", border: "2px solid white" }} />
              </Form.Item>

              <Form.Item label='Address' name='address' rules={[{ required: true, message: "Please enter your Address" }]}>
                <Input type='text' style={{ backgroundColor: "gray", color: "white", opacity: "0.5", borderRadius: "20px", border: "2px solid white" }} />
              </Form.Item>


              <button className='btn btn-danger my-4' htmltype='submit' style={{ width: "100%", borderRadius: "20px", backgroundColor: "red", color: "white", border: "none" }}>Sign In</button>


            </div>

          </Form>
          <div className="adminLogin">
            <Button type='primary'><Link to='/Login'><UserOutlined />Login as User</Link></Button>
            <Button type='primary' className='mx-2'><Link to='/adminSignUp'><UserAddOutlined />Register as Admin</Link></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
