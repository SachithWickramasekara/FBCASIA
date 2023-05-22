import React from 'react'
import AboutImage from '../components/About/AboutImage'
import AboutOurStory from '../components/About/AboutOurStory'
import AboutNavigating from '../components/About/AboutNavigating'
import AboutOurTeam from '../components/About/AboutOurTeam'
import AboutMap from '../components/About/AboutMap'

const AboutUs = () => {
  return (
    <div className='flex flex-col'>
        <AboutImage/>
        <AboutOurStory/>
        <AboutNavigating/>
        <AboutOurTeam/>
        <AboutMap/>
    </div>
  )
}

export default AboutUs