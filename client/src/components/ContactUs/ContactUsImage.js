import React from 'react'

const ConatctUsImage = () => {
    if(window.innerWidth >= 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[336px] w-full'>
                <img src='assets/contactUs.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }else if(window.innerWidth < 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[400px] w-auto'>
                <img src='assets/contactUs_responsive.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }
}

export default ConatctUsImage