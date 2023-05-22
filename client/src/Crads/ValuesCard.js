import React from 'react'

const ValuesCard = ({item}) => {
  return (
    <div className='flex flex-col mx-auto'>
        <div className=''>
            <img src={item.path} alt={item.title}/>
        </div>
        <div className='pb-8 text-[#111439] text-sm font-normal'>
            {item.title}
        </div>
    </div>
  )
}

export default ValuesCard