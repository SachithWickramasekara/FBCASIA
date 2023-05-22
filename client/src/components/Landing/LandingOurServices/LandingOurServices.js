import React from 'react'
import ServicesTab from './ServicesTab'

const LandingOurServices = () => {
  return (
    <div className=' px-4 lg:py-20 py-12 flex flex-col lg:flex-row gap-2 '>
      <div className='flex lg:flex-row mx-auto flex-col items-center lg:text-left text-center'>
        <div className='lg:w-full lg:max-w-full'>
          <div className='lg:w-[400px]'>
            <div className='text-2xl lg:text-5xl text-[#111439] font-semibold mb-8'>Take a Look at Our Services</div>
            <div>We provide professional and cost-effective outsourced inbound call center services that are flexible and scalable. Our service industries include telecom, insurance, healthcare, consulting, and accounting.</div>
          </div>
        </div>
        <div className='lg:w-full'>
            <ServicesTab/>
        </div>
      </div>
    </div>
  )
}

export default LandingOurServices