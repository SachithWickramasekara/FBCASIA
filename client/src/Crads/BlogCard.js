import React from 'react'

const BlogCard = ({items}) => {
  return (
    <div className=' justify-center items X '>
        <div className=' flex flex-col gap-2 group lg:hover:bg-[#FF731D] lg:hover:text-white rounded-lg p-4 hover:text-white'>
            <div className='w-full'>
                <img src={items.imageLink} alt={items.title} className='w-full'/>
            </div>
            <div className='text-[#111439] text-xl font-semibold group-hover:text-white'>{items.title}</div>
            <div className='text-[#464255] text-base group-hover:text-white'>{items.description}</div>
            <div className='text-[#464255] text-sm group-hover:text-white' >{items.date}</div>
        </div>
    </div>
  )
}

export default BlogCard