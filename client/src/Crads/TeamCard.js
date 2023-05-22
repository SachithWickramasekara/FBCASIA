import React from 'react';

const TeamCard = ({items}) => {
  return (
    <div className='flex flex-col mx-auto'>
        <div className='sm:w-[170px] w-[105px] sm:h-[175px]'>
            <img src={items.pathImage} alt={items.name}/>
        </div>
        <div className='text-[#111439] text-sm font-medium pt-4 pb-2 lg:text-base md:text-base'>
            { items.name }
        </div>
        <div className='text-[#464255] text-xs font-normal lg:w-[148px] w-[98px] pb-6 lg:text-sm md:text-base md:w-full'>
            {items.position}
        </div>
    </div>
  )
}

export default TeamCard;
