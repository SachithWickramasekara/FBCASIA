import React from 'react'

const FBCMediaCard = ({items}) => {
  return (
    <div className='flex flex-col gap-6 hover:bg-[#FF731D] hover:text-white p-2 rounded-lg'>
        <div className='w-full'>
            <img src={items.path} alt='FBCMedia' className='w-full'/>
        </div>
        <div>
            {items.desc}
        </div>
    </div>
  )
}

export default FBCMediaCard