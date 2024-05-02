import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { SearchOutlined } from '@ant-design/icons';
import Disaster from '../images/Disaster.jpeg';
import companyLogo1 from '../images/companyLogo1.png';
import companyLogo2 from '../images/companyLogo2.png';
import companyLogo3 from '../images/companyLogo3.png';
import companyLogo4 from '../images/companyLogo4.png';
import Famine from '../images/Famine.webp';
import Campains from '../components/Campains';
import Achievements from '../components/Achievements';
const HomePage = () => {
  return (
    <>
      <Layout>
        <div className='w-full bg-white py-24'>
          <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

            <div className='flex flex-col justify-start gap-3'>
              <p className='text-2xl text-[#20B486] font-medium'><i>REVOLUTIONIZING DISASTER MANAGEMENT</i></p>
              <h1 className='md:leading-[90px] py-2 md:text-6xl text-5xl font-semibold'>WELCOME TO <span className='text-[#20B486] md:text-7xl font-extrabold'>CRISISCHAIN+</span>
              </h1>
              <p className='py-2 text-lg text-gray-600'>Navigate through chaos with ease - our system keeps you prepared when disaster strikes.</p>

              <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                <input
                  className='bg-white'
                  type="text"
                  placeholder='What do want to do?'
                />
                <button>
                  <SearchOutlined
                    size={20}
                    className="icon"
                    style={{ color: '#000' }}

                  />
                </button>
              </form>
            </div>

            <img src={Disaster} style={{ backgroundBlendMode: "lighten", borderRadius:"10%"}} className="md:order-last  order-first rounded-md" alt='Loading' />
          </div>
        </div>
        <div className='w-full bg-white py-[50px]'>
          <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Where innovation meets safety - explore our cutting-edge disaster management technologies.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
              <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                <img src={companyLogo1} alt='Loading' className='w-20 h-20 mx-8' />
                <img src={companyLogo2} alt='Loading' className='w-20 h-20 mx-8' />
                <img src={companyLogo3} alt='Loading' className='w-20 h-20 mx-8' />
                <img src={companyLogo4} alt='Loading' className='w-20 h-20 mx-8' />
              </div>
            </div>
          </div>
          <Campains />
          <Achievements />
          <div class="md:max-w-[1580px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center px-4 md:p-20">
            <img src={Famine} class="w-[650px] mx-auto" alt='Loading' />
            <div>
              <h1 class="py-2  text-4xl font-extrabold">Be a part of <span class="text-[#20B486]">our Campaigns!</span>
              </h1>
              <p class="py-2 text-lg text-gray-600">Start by registering for free and help us saving lives!</p>
              <button class="max-[780px]:w-full my-4 px-8 py-3 rounded-md bg-[#20B486] text-white font-bold"><Link to='/register'>Sign Up For Free</Link></button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HomePage
