import React from 'react'

const AboutNavigating = () => {
  return (
    <div className='bg-[#0C2E4E] w-full flex flex-col lg:flex-row p-12 text-white'>
        <div className='lg:w-1/3 w-full font-semibold text-xl mb-4 lg:text-5xl'>
            <div className='lg:w-[256px]'>
            Navigating towards Success
            </div>
        </div>
        <div className='lg:w-2/3 w-full flex lg:flex-row flex-col lg:gap-24 gap-8'>
            <div className='lg:w-1/2 px-4'>
                <div className='text-xl font-semibold lg:text-2xl'>
                    Our Vision
                </div>
                <div className='text-base font-light lg:pt-8'>
                    Be the leading provider of best-in-class outsourcing and offshoring services.
                </div>
            </div>
            <div className='w-full lg:w-auto bg-[#FF731D] rounded-lg px-6 py-4 lg:py-12 flex flex-col gap-4'>
                <div className='font-semibold text-lg'>
                    Our Mission
                </div>
                <div className='lg:w-[321px] text-base leading-6'>
                Combine high-quality talent with best practices to provide superior customer experiences. We deliver desired outcomes and elevate integrity by practicing an “Employee First” culture. We seek to understand client demands and continuously explore options for effective and efficient service.
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutNavigating