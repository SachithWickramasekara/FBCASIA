import React from 'react'
import { contactAddressData } from '../../constants/ContactData'

const ContactAddresses = () => {
  return (
    <div className='bg-[#0C2E4E] px-6 py-10 lg:px-20 lg:py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
            {contactAddressData.map((item,i)=>(
                <div key={i} className='text-gray-300 font-light  flex flex-col gap-4 py-6'>
                    <div className='text-white hover:text-[#FF731D]'>
                        {item.country}
                    </div>
                    <div className='w-full flex flex-row gap-4 hover:text-white'>
                        <img src='assets/location_Address.png' className="w-[20px] h-[20px]"/>
                        <span className='w-[172px]'>{item.address}</span>
                    </div> 
                    <div className='w-full flex flex-row gap-4 hover:text-white'>
                        <img src='assets/address.png' className="w-[20px] h-[20px] border-none"/>
                        <span className='w-[172px]'>{item.phone}</span>
                    </div> 
                    <div className='w-full flex flex-row gap-4 hover:text-white'>
                        <img src="assets/emailAddress.png" className="w-[20px] h-[20px]"/>
                        <span className='w-[172px]'>{item.email}</span>
                    </div>       
               </div>
            ))}
    </div>
  )
}

export default ContactAddresses