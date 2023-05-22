import React from 'react'

const ServiceInboundCard = ({items}) => {
  return (
    <div className=' px-8 sm:px-12 py-4 sm:py-8 ' style={{ backgroundColor: items.color }}>
        <div>
            <img src={items.path} alt={items.title}/>
        </div>
        <div className='text-[#111439] text-lg font-normal'>
            {items.title}
        </div>
        <div className='text-[#464255] text-base font-light'>
            {items.desc}
        </div>
    </div>
  )
}

export default ServiceInboundCard