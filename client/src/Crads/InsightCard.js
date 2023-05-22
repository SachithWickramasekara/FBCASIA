import React from 'react'

const InsightCard = ({data}) => {
  return (
    <div className='max-w-[500px]  lg:bg-none lg:hover:text-white group flex flex-col px-4 py-4 rounded-xl gap-2  w-full'>
        <div className='lg:w-full flex flex-row items-center justify-center'>
            <img src={data.path} alt='engagement icon' className='lg:w-full rounded-xl'/>
        </div>
        <div className='lg:text-left text-center text-lg group-hover:text-[#FF731D]'>{data.Title}</div>
        <div className='lg:text-left text-center lg:w-[317px] mx-auto sm:mx-0 text-base text-gray-300 group-hover:text-white'>{data.description}</div>
        <div className='text-gray-300 text-center lg:text-left group-hover:text-white'>{data.date}</div>
    </div>
  )
}

export default InsightCard