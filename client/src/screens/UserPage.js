import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { Card, Modal, Form, Input, Select, message, Upload, Button } from 'antd';
import reportedDisaster from '../images/reportedDisaster.jpeg';
import { UploadOutlined } from '@ant-design/icons';
import danger from '../images/danger.png';
import volunteer from '../images/volunteer.png';
import maps from '../images/maps.png';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Footer from '../components/layout/Footer';
const UserPage = () => {

    const [loading, setLoading] = useState(false);
    const [loginUser, setLoginUser] = useState('');
    const [showModal1, setShowModal1] = useState(false);
    const [showVolunteerModal, setShowVolunteerModal] = useState(false);
    const [image, setImage] = useState([]);

    const navigate = useNavigate();

    // Function to add volunteer
    const addVolunteer = async (values) => {
        console.log(values);
        try {
            setLoading(true);
            await axios.post('volunteers/addVolunteer', values);
            setLoading(false);
            message.success('Registration Successful');
            setShowVolunteerModal(false);
            navigate('/volunteerRegistration');
        }
        catch (error) {
            setLoading(false);
            message.error('Error Registering Volunteer');
            console.log(error);
            setShowVolunteerModal(false);
        }
    }

    // Function to upload images
    const onUploadChange = ({ fileList }) => {

        console.log(fileList);
        setImage(fileList);
        if (fileList.status !== 'uploading') {
            if (fileList.status === 'done') {
                message.success(`${fileList.file.name} upload successful.`);
            } else if (fileList.status === 'error') {
                message.error(`${fileList.file.name} upload failed.`);
            }
        }
    }

    // Add Disaster to the database
    const reportDisasterSubmit = async (values) => {
        console.log(values);

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);

        const images = values.image.fileList;
        console.log(images);

        const formData = new FormData();

        formData.append('userId', userId);
        formData.append('address', values.address);
        formData.append('district', values.district);
        formData.append('state', values.state);
        formData.append('type', values.type);
        formData.append('description', values.description);
        formData.append('status', values.status);
        formData.append('date', values.date);
        images.forEach((image) => {
            formData.append('image', image);
        })

        try {
            setLoading(true);
            await axios.post('/disasters/addDisaster', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'}
            });
            setLoading(false);
            message.success('Disaster Reported Successfully');
            setShowModal1(false);
        } catch (error) {
            setLoading(false);
            message.error('Failed to Report Disaster');
            console.log(error);
            setShowModal1(false);
        }
    }

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
                <Navbar loginUser={loginUser} />
                <div className="userPage">
                    <Card className='userCards' title="Report a Disaster" bordered={true} style={{ width: "300px" }}>
                        {loading && <Spinner />}
                        <img src={reportedDisaster} alt="Loading" />
                        <button className='btn bg-[#20B486] text-light hover:bg-sky-700' onClick={() => setShowModal1(true)}>Report Disaster</button>
                    </Card>
                    <Card className='userCards' title='Reported Disasters' bordered={true} style={{ width: "300px" }}>
                        {/* <h1>Report Disaster</h1> */}
                        <img src={danger} alt="Loading" />
                        <button className='btn bg-[#20B486] text-light hover:bg-sky-700'>Click Here</button>
                    </Card>
                    <Card className='userCards' title='Volunteer Registration' bordered={true} style={{ width: "300px" }}>
                        {loading && <Spinner />}
                        <img src={volunteer} alt="Loading" />
                        <button className='btn bg-[#20B486] text-light hover:bg-sky-700' onClick={() => setShowVolunteerModal(true)}>Add Volunteer</button>
                    </Card>
                    <Card className='userCards' title='Maps' bordered={true} style={{ width: "300px" }}>
                        {/* <h1>Report Disaster</h1> */}
                        <img src={maps} alt="Loading" />
                        <button className='btn bg-[#20B486] text-light hover:bg-sky-700'>Click Here</button>
                    </Card>
                </div>
            </div>
            <Footer/>
            <Modal open={showModal1}
                onOk={() => setShowModal1(false)}
                onCancel={() => setShowModal1(false)}
                footer={false}>
                <h1>Report a Disaster</h1>
                <Form layout='vertical' onFinish={reportDisasterSubmit} style={{ margin: "2rem 0 0 0" }}>
                    <Form.Item label='Address' name='address'>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="District" name='district'>
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label="State" name='state'>
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label='Type of Disaster' name='type'>
                        <Select>
                            <Select.Option value='Flood'>Flood</Select.Option>
                            <Select.Option value='Earthquake'>Earthquake</Select.Option>
                            <Select.Option value='Fire'>Fire</Select.Option>
                            <Select.Option value='Cyclone'>Cyclone</Select.Option>
                            <Select.Option value='Tsunami'>Tsunami</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='Description' name='description'>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label='Ongoing Status' name='status'>
                        <Select>
                            <Select.Option value='Ongoing'>Ongoing</Select.Option>
                            <Select.Option value='Resolved'>Resolved</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Date" name='date'>
                        <Input type='date' />
                    </Form.Item>
                    <Form.Item label='Upload Images' name='image'>
                        <Upload name="logo" listType="picture" onChange={onUploadChange} fileList={image}>
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <div className="reportButtons">
                        <button className='btn btn-success' type='submit'>Report</button>
                        <button className='btn btn-danger mx-2' type='submit'>Show on Maps</button>
                        {/* <button className='btn btn-danger mx-2' onClick={() => setShowModal(false)}>Cancel</button> */}
                    </div>
                </Form>
            </Modal>

            <Modal open={showVolunteerModal}
                onOk={() => setShowVolunteerModal(false)}
                onCancel={() => setShowVolunteerModal(false)}
                footer={false}
                width={700}>
                <h3>Volunteer Registration</h3>
                <Form layout='vertical' onFinish={addVolunteer} style={{ margin: "2rem 0 0 0" }}>
                    <Form.Item label='Name' name='name' rules={[{ required: true }]}>
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label='Age' name='Age' rules={[{ required: true }]}>
                        <Input type='number' />
                    </Form.Item>
                    <Form.Item label='Gender' name='gender' rules={[{ required: true }]}>
                        <Select>
                            <Select.Option value='Male'>Male</Select.Option>
                            <Select.Option value='Female'>Female</Select.Option>
                            <Select.Option value='Nota'>Prefer not to say</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='Contact' name='contact' rules={[{ required: true }]}>
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label='State' name='state' rules={[{ required: true }]}>
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label='District' name='district' rules={[{ required: true }]}>
                        <Input type='text' />
                    </Form.Item>
                    <Form.Item label='Address' name='address' >
                        <Input.TextArea rows={3} />
                    </Form.Item>
                    <Form.Item label='Interested to work in' name='service' >
                        <Select>
                            <Select.Option value='financial'>Financial</Select.Option>
                            <Select.Option value='Shelter'>Shelter</Select.Option>
                            <Select.Option value='Clothes'>Clothes</Select.Option>
                            <Select.Option value='Food'>Food</Select.Option>
                            <Select.Option value='other'>Other</Select.Option>
                        </Select>
                    </Form.Item>
                    <div className="volBtns">
                        <button className='btn btn-success' type='submit'>ADD</button>
                        <button className='btn btn-danger mx-2' type='submit' onClick={() => setShowVolunteerModal(false)}>Cancel</button>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default UserPage
