import React from 'react'
import { EngagementModelCardData } from '../../constants/ServiceData'
import PricingModal from '../Modals/PricingModal';

const EngagementModels = () => {
  return (
    <div className="md:py-12 lg:px-24 px-4 my-4">
      <div className="text-[#111439] text-4xl lg:text-5xl font-semibold py-8 lg:py-16">
        Engagement Models
      </div>
      <div className="flex lg:flex-row  flex-col lg:gap-32 ">
        <div className="flex flex-col gap-12 ">
          <div className="text-[#111439] text-2xl font-medium">
            Staff Augmentation
          </div>
          <div className="text-[#464255] text-base font-light pb-12 lg:pb-0">
            This model benefits companies as a temporary solution. Can
            accommodate filling in for staff shortages and rapid access to
            missing skills and capabilities.
          </div>
          <div className="hidden lg:block">
            <PricingModal />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {EngagementModelCardData.map((items, i) => (
            <div key={i} className="border border-[#46425533] rounded-xl p-6">
              <div className="text-base text-[#464255] font-light hover:text-[#111439] hover:font-medium">
                {items.desc}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden block py-10">
          <PricingModal />
        </div>
      </div>
    </div>
  );
}

export default EngagementModels