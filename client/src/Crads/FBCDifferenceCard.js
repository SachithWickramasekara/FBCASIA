import React from 'react'

const FBCDifferenceCard = ({items}) => {
  return (
    <div className='py-8 px-4 mx-auto'>
      <div>
        <img src={items.path} alt={items.title}/>
      </div>
      <div className='text-[#111439] text-lg font-semibold'>
        {items.title}
      </div>
      <div className='lg:w-[420px] text-sm font-light'>
        {items.desc}
      </div>
    </div>
  )
}

export default FBCDifferenceCard