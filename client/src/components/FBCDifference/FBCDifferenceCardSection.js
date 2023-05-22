import React from 'react'
import FBCDifferenceCard from '../../Crads/FBCDifferenceCard'
import { FBCDifferenceCardData } from '../../constants/FBCDifferenceDataData'

const FBCDifferenceCardSection = () => {
  return (
    <div className='sm:px-20 px-4 py-12'>
        <div className='text-[#111439] text-2xl lg:text-5xl font-semibold lg:w-[765px] text-center sm:text-left '>
        Maximize Your Business Potential with FBC Asia
        </div>
        <div className='grid grid-cols-2 px-6 py-20'>
            {FBCDifferenceCardData.map((items,i)=>(
                <FBCDifferenceCard items={items} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default FBCDifferenceCardSection