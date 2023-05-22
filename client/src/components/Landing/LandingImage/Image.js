import React from 'react'

const Image = () => {
    if(window.innerWidth >= 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[336px] w-full'>
                <img src='assets/Hero_Image.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }else if(window.innerWidth < 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[400px] w-auto'>
                <img src='assets/Hero_Image-responsive.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }
}

export default Image