import React from 'react'
import ValuesCard from '../../Crads/ValuesCard'
import { ValueCardData } from '../../constants/CareerData'

const CareerValues = () => {
  return (
    <div className='lg:px-20 px-4 py-12'>
        <div className='text-[#111439] lg:text-5xl text-2xl font-semibold text-center pb-10 lg:pb-20 '>
        Our Core Values
        </div>
        <div className='grid grid-cols-3 lg:grid-cols-6'>
            {ValueCardData.map((item,i)=>(
                <ValuesCard item={item} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default CareerValues