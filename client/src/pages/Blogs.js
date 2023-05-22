import React from 'react'
import BlogImage from '../components/Blogs/BlogImage'
import BlogGallery from '../components/Blogs/BlogGallery'

const Blogs = () => {
  return (
    <div>
      <BlogImage />
      <div className="px-20 lg:py-20 py-10 flex flex-col lg:flex-row md:flex-col justify-between items-center gap-8 md:gap-8 sm:gap-0">
        <div className="text-[#111439] text-2xl sm:text-5xl font-semibold text-center lg:text-left ">
          Sharing Insights
        </div>
        <div className="text-[#464255] sm:w-[556px] w-[362px] text-base text-center lg:text-left">
          Find information and resources on everything outsourcing, from
          customer service to changes in the industry and other helpful bits.
        </div>
      </div>
      <BlogGallery />
    </div>
  );
}

export default Blogs