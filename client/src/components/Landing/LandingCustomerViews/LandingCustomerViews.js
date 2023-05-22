import React, { useState } from 'react';
import TestimonialCard from '../../../Crads/TestimonialCard';
import { TestimonialData } from '../../../constants/HeroData';


const LandingCustomerViews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? TestimonialData.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === TestimonialData.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className='flex flex-col bg-[#0C2E4E] py-12 sm:px-12 px-4 justify-center items-center'>
      <div className='text-white font-semibold text-2xl sm:text-5xl mb-40'>Our Customers' Views</div>
      <div className='flex flex-row items-center'>
        <TestimonialCard item={TestimonialData[currentIndex]} />
      </div>
    </div>
  );
};

export default LandingCustomerViews;
