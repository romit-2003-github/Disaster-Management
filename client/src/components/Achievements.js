import React from 'react'
import achievement from '../images/Achievement.webp';
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'
import {AlertOutlined} from '@ant-design/icons'


const Achievements = () => {
    return (
        <>
            <div className='w-full bg-white py-24'>
                <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

                    <div className='flex flex-col justify-center '>
                        <h1 className='md:leading-[72px] text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievements</span></h1>
                        <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

                        <div className='grid grid-cols-2 py-16'>
                            <div className='py-6 flex'>
                                <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                                    <AlertOutlined
                                        size='60px'
                                        style={{ color: '#1A906B' }}
                                    />
                                </div>
                                <div className='px-3'>
                                    <h1 className='text-2xl font-semibold'>300+</h1>
                                    <p className='text-[#6D737A]'>NGOs and Hospitals</p>
                                </div>

                            </div>
                            <div className='py-6 flex'>
                                <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                                    <FiVideo
                                        size={30}
                                        style={{ color: '#FFC27A' }}
                                    />
                                </div>
                                <div className='px-3'>
                                    <h1 className='text-2xl font-semibold'>10,000 ETH+</h1>
                                    <p className='text-[#6D737A]'>Fund Raised</p>
                                </div>

                            </div>
                            <div className='py-6 flex'>
                                <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                                    <SlGraduation
                                        size={30}
                                        style={{ color: '#ED4459' }}
                                    />
                                </div>
                                <div className='px-3'>
                                    <h1 className='text-2xl font-semibold'>10L+</h1>
                                    <p className='text-[#6D737A]'>Lives Saved</p>
                                </div>

                            </div>
                            <div className='py-6 flex'>
                                <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                    <SlPeople
                                        size={30}
                                        style={{ color: '#0075FD' }}
                                    />
                                </div>
                                <div className='px-3'>
                                    <h1 className='text-2xl font-semibold'>1,00,000+</h1>
                                    <p className='text-[#6D737A]'>Users</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <img style={{borderRadius:"10%"}} src={achievement} className="m-auto md:order-last  order-first" alt='Loading' />

                </div>
            </div>

        </>
    )
}

export default Achievements
