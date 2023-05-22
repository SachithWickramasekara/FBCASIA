import React from 'react'

const ServicesImage = () => {
    if(window.innerWidth >= 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[336px] w-full'>
                <img src='assets/ServicesImage.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }else if(window.innerWidth < 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[400px] w-auto'>
                <img src='assets/ServicesImage_responsive.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }
}

export default ServicesImage