import React from 'react'
import LandingImage from '../components/Landing/LandingImage/LandingImage'
import LandingCustomerViews from '../components/Landing/LandingCustomerViews/LandingCustomerViews'
import LandingOurServices from '../components/Landing/LandingOurServices/LandingOurServices'
import LandingEngagementModel from '../components/Landing/LandingEngagementModels/LandingEngagementModel'
import ShareInsights from '../components/Landing/ShareInsights/ShareInsights'
import LandingMap from '../components/Landing/LandingMap/LandingMap'
import LandingForm from '../components/Landing/LandingForm/LandingForm'
import LandingUnique from '../components/Landing/LandingUnique/LandingUnique'

const Landing = () => {
  return (
    <div className='flex flex-col'>
        <LandingImage/>
        <LandingCustomerViews/>
        <div className='bg-[#FAFAFA]'>
          <LandingOurServices/>
        </div>
        <LandingEngagementModel/>
        <LandingUnique/>
        <ShareInsights/>
        <LandingMap/>
        <LandingForm/>
    </div>
  )
}

export default Landing