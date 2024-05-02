import React from 'react'


const Card = ({campaign}) => {
  return (
    <>
      <div className='z-10 h-auto bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
        <img src={campaign.linkImg} 
                className="h-40 w-full object-cover"
        alt='loading'
        />
        <div className='p-4 border border-b'>
            <h1 className='truncate font-bold'>{campaign.title}</h1>
            
        </div>
        <p className='p-3 text-md'>{campaign.description}</p>
        <button className='btn btn-success m-3'>Learn More</button>
        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {campaign.category}
        </div>
    </div>
    </>
  )
}

export default Card
