import React from 'react'

const Location = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className=' text-[#8E8E8E] text-sm'>Location</p>
        <span className=' flex'>
            <img src="/svg/location.svg" alt="location" />
            <p className='text-[#1A1A1A] text-base'>Bangalore, KA</p>
        </span>
    </div>
  )
}

export default Location