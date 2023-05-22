import React, { useState } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { TestimonialData } from '../constants/HeroData';

const TestimonialCard = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? TestimonialData.length - 1 : currentIndex - 1);
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === TestimonialData.length - 1 ? 0 : currentIndex + 1);
  }

  if(window.innerWidth >= 768){
    return (
        <div className='flex flex-row items-center'>
        <div className='relative left-6 '>
            <AiFillLeftCircle size={50} className='text-[#3D5871] bg-[#0C2E4E] rounded-full hover:text-[#FF731D] ' onClick={handlePrev} />
        </div>
        <div className='bg-white px-4 sm:px-8 py-2 text-center rounded-xl lg:w-[780px]'>
            <div className='relative bottom-28'>
            <img src={TestimonialData[currentIndex].path} alt='testimonial' className='mx-auto rounded-full' />
            </div>
            <div className='relative bottom-16 text-[#464255] text-baase font-light'>
            {TestimonialData[currentIndex].desc}
            </div>
            <div className='text-[#464255] text-lg font-semibold relative bottom-12'>
            {TestimonialData[currentIndex].Name}
            </div>
            <div className='text-[#464255] text-base font-light relative bottom-12'>
            {TestimonialData[currentIndex].title}
            </div>
            <div className='relative bottom-8 flex justify-center mx-auto'>
            <img src={TestimonialData[currentIndex].companyLogo} alt='testimonial-Icon' />
            </div>
        </div>
        <div className='relative right-6'>
            <AiFillRightCircle size={50} className='text-[#3D5871] bg-[#0C2E4E] rounded-full hover:text-[#FF731D]' onClick={handleNext} />
        </div>
        </div>
        )
    } else if(window.innerWidth<768){
        return(
            <div>
                <div className='bg-white text-center px-8 rounded-xl'>
                    <div className='relative bottom-28'>
                        <img src={TestimonialData[currentIndex].path} alt='testimonial' className='mx-auto rounded-full' />
                    </div>
                    <div className='relative bottom-24 text-[#464255] text-baase font-light'>
                        {TestimonialData[currentIndex].desc}
                    </div>
                    <div className='text-[#464255] text-lg font-semibold relative bottom-20'>
                        {TestimonialData[currentIndex].Name}
                    </div>
                    <div className='text-[#464255] text-base font-light relative bottom-16'>
                        {TestimonialData[currentIndex].title}
                    </div>
                    <div className='relative bottom-10 flex justify-center mx-auto'>
                        <img src={TestimonialData[currentIndex].companyLogo} alt='testimonial-Icon' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between px-16 pt-8'>
                    <AiFillLeftCircle size={40} className='text-[#3D5871] bg-[#0C2E4E] rounded-full hover:text-[#FF731D] ' onClick={handlePrev}/>
                    <AiFillRightCircle size={40} className='text-[#3D5871] bg-[#0C2E4E] rounded-full hover:text-[#FF731D]' onClick={handleNext} />
                </div>
            </div>
        )
    }
}

export default TestimonialCard