import React from 'react'

export const RequestCard = () => {
  return (
    <div
    style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
    className=" w-full rounded-lg  mt-5 items-center p-5"
  >
    <div>
        <h3 className='font-medium text-lg text-left'>Pickup for Veg Biryani</h3>
        <p className='text-[#8E8E8E] text-xs'>02 Feb 2024 | 8 Persons</p>
    </div>
    <div>
        <div>
            <p className=' mt-7 text-[#7A7A7A] font-normal text-xs'>Pickup by</p>
            <div className='flex gap-1'>
                <img src="/svg/profile_icon.svg" alt="" />
                <h3 className='font-medium text-sm text-left'>John Doe (Amnesty National)</h3>
            </div>
            <div>
                <p className=' mt-2 text-[#7A7A7A] font-normal text-xs'>Portions</p>
                <h3 className='font-medium text-sm text-left'>140 kg</h3>
            </div>
        </div>
    </div>
  </div>
  )
}
