import React from 'react'

const Button_Mission = ({items}) => {
  return (
    <div className='w-auto px-4 py-1 border border-[#46425580] outline-none rounded-md text-sm font-normal text-[#46425580] hover:bg-[#FF731D] hover:text-white cursor-pointer active:bg-[#FF731D] active:text-white hover:border-none'>
        {items.text}
    </div>
  )
}

export default Button_Mission