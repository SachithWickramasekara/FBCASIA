import React from 'react'

const InlineError = ({error}) => {
  return (
    <span className='my-1 text-base text-red-600 font-medium'>{error}</span>
  )
}

export default InlineError