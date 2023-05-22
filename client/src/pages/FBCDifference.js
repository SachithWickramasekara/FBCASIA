import React from 'react'
import FBCDifferenceImage from '../components/FBCDifference/FBCDifferenceImage'
import { FBCDifferenceData } from '../constants/FBCDifferenceDataData'
import FBCDifferenceCardSection from '../components/FBCDifference/FBCDifferenceCardSection'
import LandingForm from '../components/Landing/LandingForm/LandingForm'

const FBCDifference = () => {
  return (
    <div>
        <FBCDifferenceImage/>
        <div className='text-[#464255] text-base text-center font-light lg:w-[780px] px-4 lg:px-0 mx-auto py-12'>
        We continuously research and focus on the future expectations of our clients, and we invest in and build solutions to remain a step ahead to meet those expectations. We incorporate emerging technologies into our service offerings including artificial intelligence, robotics and chatbots.
        </div>
        {/* <div className='text-[#111439] text-base text-center font-medium lg:w-[780px] px-4 lg:px-0 lg:mx-auto py-6'>
        No matter how good the technology or processes are, when the rubber hits the road, it is the person answering the phone call, email or chat who makes the difference. That is the moment of truth for me in the Customer Experience business.
        </div> */}
        {/* <div className='text-[#111439] text-lg text-center font-semibold w-[158px] mx-auto pt-6 pb-12'>
        Siva Subramaniam FBC CEO
        </div> */}
        <div className='lg:py-12 pb-12 grid grid-cols-1 lg:px-20 md:px-12 sm:grid-cols-3 justify-center items-center bg-[#FAFAFA]'>
        {FBCDifferenceData.map((items,i)=>(
            <div key={i} className='py-6'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='font-extrabold text-[#FF731D] md:text-6xl lg:text-8xl text-8xl'>
                        {items.percentage}
                    </div>
                    <div>
                        {items.title}
                    </div>
                </div>
            </div>
        ))}
        </div>
        <FBCDifferenceCardSection/>
        <LandingForm/>
    </div>
  )
}

export default FBCDifference