import React, { useState } from 'react'
import BlogCard from '../../Crads/BlogCard'
import { blogCardData } from '../../constants/BlogData'

const BlogGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? blogCardData : blogCardData.slice(0, 3);

  const handleViewMore = () => {
    setShowAll(true);
  }

    if(window.innerWidth<=768){
        return(
            <div className='sm:bg-[#FAFAFA] bg-white px-4 sm:px-20 py-4 lg:py-10 flex flex-col gap-4 lg:gap-8'>
                <div className='text-[#111439] lg:text-5xl text-2xl font-semibold lg:text-left text-center'>Blog Gallery</div>
                {/* <div className='text-xl font-light text-[#464255] lg:w-[726px] text-center lg:text-left'>Find information and resources on everything outsourcing. From Customer Service, changes in the industry and helpful bits.</div> */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                        {visibleCards.map((items,i)=>(
                            <BlogCard items={items} key={i} />
                        ))}
                    </div>
                    <div className='text-center'>
                    <button onClick={handleViewMore} className='text-[#FF731D]  py-2 px-4 rounded-full mt-4 font-semibold'>
                        View More
                    </button>
                    </div>
                </div>
            </div>  
        )
    }
    else if (window.innerWidth > 768){
        return(
        <div className='sm:bg-[#FAFAFA] bg-white px-4 sm:px-20 py-4 lg:py-10 flex flex-col gap-4 lg:gap-8'>
            <div className='text-[#111439] lg:text-5xl text-2xl font-semibold lg:text-left text-center'>Blog Gallery</div>
            {/* <div className='text-xl font-light text-[#464255] lg:w-[726px] text-center lg:text-left'>Find information and resources on everything outsourcing.From Customer Service, changes in the industry and helpful bits.</div> */}
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {blogCardData.map((items,i)=>(
                        <BlogCard items={items} key={i} />
                    ))}
                </div>
            </div>
        </div>
        )
    }
    
}

export default BlogGallery
