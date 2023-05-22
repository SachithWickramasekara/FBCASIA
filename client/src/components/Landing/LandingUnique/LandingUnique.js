import React from 'react'
import { Unique } from '../../../constants/HeroData'

const LandingUnique = () => {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center  pt-12 lg:py-12'>
        <div className='text-center lg:text-left px-4 lg:pl-24'>
            <div className='text-[#0C2E4E] text-2xl lg:text-5xl font-semibold lg:w-[256px] lg:pb-8'>What Makes us Unique</div>
            <div className='lg:w-[256px] text-[#464255] text-base font-light my-8 lg:my-0'>We continuously research and focus on the future expectations of our clients, and we invest in and build solutions to remain a step ahead to meet those expectations.</div>
        </div>
        <div className='md:mb-8' >
            {Unique.map((items,i)=>(
                <div key={i} className='flex flex-row gap-4 text-base text-[#464255] font-light group px-4 pt-4'>
                    <div className='px-4 py-2 rounded-lg group-hover:bg-[#FF731D] group-hover:text-white'>{items.index}</div>
                    <div className='px-4 py-2 rounded-lg group-hover:bg-[#FF731D] group-hover:text-white'>{items.description}</div>
                </div>
            ))}
        </div>
        <div className=' pt-8 md:hidden lg:block  block'>
            <img src='assets/UniqueMaskGroup.png' alt='UniqueMaskGroup' className=''/>
        </div>
    </div>
  )
}

export default LandingUnique