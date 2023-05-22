import React from 'react'
import FBCMediaCard from '../../Crads/FBCMediaCard'
import { MediaCardData } from '../../constants/CareerData'

const FBCMedia = () => {
  return (
    <div className='lg:px-20 px-8 lg:pt-8 pb-12'>
        <div className='text-center lg:text-left py-4 text-[#111439] text-4xl font-semibold lg:text-5xl'>FBC Media</div>
        <div className='flex lg:flex-row flex-col'>
            <div className='flex flex-col w-full text-[#464255] text-base'>
                <div className='lg:w-[587px] mb-6 lg:text-left text-center text-[#464255] text-base font-light'>
                The results from FBC Asia Pacific have been exceptional. The management team should be very proud of the working environment they have created. Their staff has reported much higher levels of job satisfaction compared to both local Filipino and international.
                </div>
                <span className='text-center lg:text-left text-lg font-medium text-[#0C2E4E]'>Ian Aitchison</span>
                <div className='mx-auto lg:mx-0 text-center sm:text-left mb-8 text-[#0C2E4E] text-sm font-normal'>
                CEO of COPC Inc.,<br/>
                Asia Pacific Region
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
                {MediaCardData.map((items,i)=>(
                    <FBCMediaCard items={items}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FBCMedia