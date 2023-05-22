import React from 'react'

const FBCLifeImage = () => {
    if(window.innerWidth >= 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[526px] w-full'>
                <img src='assets/FBCLife.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }else if(window.innerWidth < 768){
        return(
            <div className='flex flex-col'>
            <div className='h-[246px] w-auto'>
                <img src='assets/FBCLife_responsive.png' alt='Landing Image' className='h-full w-full  object-cover'/>
            </div>
            </div>
        )
    }
}
// public\assets\FBCLife.png

export default FBCLifeImage