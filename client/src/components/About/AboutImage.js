import React from 'react'

const AboutImage = () => {
    if(window.innerWidth >= 768){
        return(
            <div className='flex flex-col'>
                <div className='h-[336px] w-full'>
                    <img src='assets/AboutUs-Image.png' alt='Landing Image' className='h-full w-full  object-cover'/>
                </div>
            </div>
        )
    }else if(window.innerWidth < 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[400px] w-auto'>
                <img src='assets/AboutUs-Image_responsive.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }
}

export default AboutImage