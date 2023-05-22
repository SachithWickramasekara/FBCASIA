import React from 'react'
import CareerImage from '../components/Career/CareerImage'
import FBCMedia from '../components/Career/FBCMedia'
import OurValues from '../components/Career/OurValues'
import CareerValues from '../components/Career/CareerValues'
import FBCLife from '../components/Career/FBCLife'
import Mission from '../components/Career/Mission'


const Career = () => {

  return (
    <div className=''>
        <CareerImage/>
        <div className='px-24 py-20 text-center text-[#464255] text-base font-light '>
        FBC Asia Pacific (FBC) prides itself on creating a healthy work environment for employees while delivering quick and world-class customer service.
        </div>
        <FBCMedia/>
        <OurValues/>
        <CareerValues/>
        <FBCLife/>
        <Mission/>
      
        <div className='lg:px-20 px-8 py-12 lg:py-12 bg-[#FAFAFA] flex flex-col gap-4'>
            <div className='text-2xl lg:text-5xl text-[#111439] font-semibold lg:w-[732px]'>
            Didn’t find the position you were looking for?
            </div>
            <div className='text-[#464255] font-light text-base'>
            Send us your CV to careers@fbcapac.com
            </div>
        </div>
    </div>
  )
}

export default Career