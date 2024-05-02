import React from 'react'
import Logo from './Logo.png';
import { FacebookFilled, DribbbleOutlined, LinkedinFilled, InstagramOutlined, BehanceCircleFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <>
      <div className='w-full  py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <img src={Logo} className="h-[50px] w-[100px]" alt='Loading' />
                <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
                <h3 className='py-2 text-[#6D737A]'>Call : +91 9876543210</h3>
                <h3 className='py-2 text-[#6D737A]'>123, 15th Floor, <br/> Tower Alpha, Sector-120<br></br> Gurgaon, Haryana <br /> India, 122003</h3>
                <h3 className='py-2 text-[#363A3D]'>Email: example@gmail.com</h3>
                <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FacebookFilled size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><DribbbleOutlined size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><LinkedinFilled size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><InstagramOutlined size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><BehanceCircleFilled size={25} style={{color:'#4DC39E'}} /></div>

                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Home</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Campaigns</li>
                    <li className='py-2'>Blog</li>
                    <li className='py-2'>Contact</li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Category</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Lorem.</li>
                    <li className='py-2'>Ipsum</li>
                    <li className='py-2'>Marketing</li>
                    <li className='py-2'>Business</li>
                    <li className='py-2'>Dolor.</li>
                    <li className='py-2'>Newsletter</li>
                    <li className='py-2'>Donate</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Subscribe</h3>
                <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                <form className='py-4'>
                    <input 
                        className='bg-[#F2F3F4] p-4 w-full rounded' 
                        placeholder='Email here' 
                    />
                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium'>Subscribe Now</button>

                </form>


            </div>
        
        </div>
    </div>
    </>
  )
}

export default Footer
