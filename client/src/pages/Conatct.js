import React from 'react'
import ConatctUsImage from '../components/ContactUs/ContactUsImage'
import ContactUsForm from '../components/ContactUs/ContactUsForm'
import ContacttMap from '../components/ContactUs/ContactMap'
import ContactAddresses from '../components/ContactUs/ContactAddresses'

const Contact = () => {
  return (
    <div>
        <ConatctUsImage/>
        <div className='text-center text-[#464255] text-base font-light lg:px-20 px-4 pt-16 '>
            Got a question, suggestion, or feedback? We’d love to hear from you.
        </div>
        <div className='lg:px-[175px] md:p-16'>
            <ContactUsForm/>
        </div>
        <div className='text-center text-[#464255] text-base font-light lg:px-20 lg:py-20 px-4 py-16 flex flex-col gap-8'>
            <span className='text-[#111439] text-2xl sm:text-5xl font-semibold'>
                We're Here for You
            </span>
            <span className='lg:md:w-[510px] mx-auto'>
            Our network of specialized outsourced services supports businesses around the globe.
            </span>
        </div>
        <ContacttMap/>
        <ContactAddresses/>
    </div>
  )
}

export default Contact