import React from 'react'
import Slider from 'react-slick'
import Card from './Card';
import { openCampains } from '../data/OpenCampains';
const Campains = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] py-32'>
                <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                    <div className='py-4'>
                        <h1 className='py-3 text-3xl font-bold'>Our Open <span className='text-[#20B486]'>Campaigns</span></h1>
                        {/* <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p> */}
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-5'>
                        {openCampains.map((campaign, i) =>
                            <div key={i}>
                                <Card campaign={campaign} />
                            </div>)}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Campains;
