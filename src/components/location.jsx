'use client'

import React from 'react'

const Location = () => {

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const showPosition = (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log('latitude', latitude, 'longitude', longitude)

        // api call to get location
    }


  return (
    <button onClick={getCurrentLocation} className='flex flex-col justify-center items-center'>
        <p className=' text-[#8E8E8E] text-sm'>Location</p>
        <div className=' flex'>
            <img src="/svg/location.svg" alt="location" />
            <span className='text-[#1A1A1A] text-base'>Bangalore, KA</span>
        </div>
    </button>
  )
}

export default Location