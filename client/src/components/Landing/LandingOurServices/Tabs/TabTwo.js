import React from 'react'
import { ServiceTabTwo } from '../../../../constants/HeroData'

const TabsTwo = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {ServiceTabTwo.map((items,key)=>(
            <div key={key} className='flex flex-col mx-12 items-center'>
                <div>
                    <img src={items.path} alt='serivce icon' />
                </div>
                <div>
                    {items.label} 
                </div>
            </div>
        ))}
    </div>
  )
}

export default TabsTwo