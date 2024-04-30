import React, { useState } from 'react'
// import logo from '../components/layout/Logo.png'
import { Form, Input, Button, message } from 'antd';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';


const AdminLogin = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitLoginHandler = async(values) => {
    // console.log(values);
    try{
      setLoading(true);
      const {data} = await axios.post('/users/adminLogin', values);
      console.log(data);
      message.success("Login Successful");
      localStorage.setItem('admin', JSON.stringify({ ...data.user, password: '', authCode: '' }));
      setLoading(false);
      navigate('/adminDashboard');
    }
    catch(error){
      setLoading(false);
      // message.error("Error Registering Admin!");
      console.log(error);
    }
  }

  return (
    <>
      <div className='LoginPage'>
        {/* <div className="Logo">
          <img src={logo} alt="loading" />
        </div> */}
        {loading && <Spinner/>}
        <div className="LoginForm">
          <div className="LoginText">
            <h1 style={{ fontSize: "3rem", color: "whitesmoke" }} className='mt-3'><b>ADMIN LOGIN</b></h1>
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
            onFinish={submitLoginHandler}
          >
            <Form.Item label='Email' name='email' rules={[{ required: true, message: "Please enter Email" }]}>
              <Input type='email' style={{ backgroundColor: 'gray', color:"white", opacity:"0.5", borderRadius: "20px", border: "2px solid white" }} />
            </Form.Item>

            <Form.Item label='Password' name='password' rules={[{ required: true, message: "Please enter Password" }]}>
              <Input type='password' style={{ backgroundColor: "gray", color:"white", opacity:"0.5", borderRadius: "20px", border: "2px solid white" }} />
            </Form.Item>

            <Form.Item label='Authentication Code' name='authCode' rules={[{ required: true, message: "Please enter Authentication Code Provided" }]}>
              <Input type='password' style={{ backgroundColor: "gray", color:"white", opacity:"0.5", borderRadius: "20px", border: "2px solid white" }} />
            </Form.Item>

            <Form.Item>
              <Button className='my-3' htmlType='submit' style={{ width: "100%", borderRadius: "20px", backgroundColor: "red", color: "white", border: "none" }}>Sign In</Button>
            </Form.Item>
          </Form>
          <div className="adminLogin">
            <Button type='primary'><Link to='/Login'><UserOutlined/>Login as User</Link></Button>
            <Button type='primary' className='mx-2'><Link to='/adminSignUp'><UserAddOutlined/> Register as Admin</Link></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
