import React from 'react'
import OurValuesImage from './OurValuesImage'

const OurValues = () => {
  return (
    <div className='lg:px-20 px-6 py-12 flex lg:flex-row flex-col' >
        <div className='lg:w-1/3 lg:text-5xl text-2xl font-semibold text-[#111439] mb-8 text-center lg:text-left'>
            Our Values
        </div>
        <div className='lg:w-2/3 '>
            <div>
                <OurValuesImage/>
            </div>
            <div className='flex lg:flex-row flex-col text-center lg:text-left pt-8 gap-4'>
                <div  className='text-[#464255] text-base font-light'>Treating every employee as a person and respecting their individuality whilst achieving our collective customer goals is an important pillar of FBC Asia. We are achievement-focused and are committed to partnering with our clients as they grow.
                </div>
                <div className='text-[#464255] text-base font-light'>
                We are straightforward, reliable, and always act with integrity. Accountability is key and we do what we say. Maintaining an enhanced level of personal and corporate responsibility is one of our integral values. We respect our clients and their needs.
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurValues