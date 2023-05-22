import React from 'react'
import PricingModal from '../Modals/PricingModal';

const ServiceGroup = () => {
  return (
    <div className="bg-[#FAFAFA] lg:px-24 lg:py-0 px-4 py-12">
      <div className="flex flex-col lg:flex-row">
        <img
          src="assets/ServiceGroup1.png"
          alt="ServiceGroup1"
          className="lg:relative lg:bottom-24 hidden lg:block "
        />
        <div className="lg:pt-32 flex flex-col gap-8">
          <div className="text-[#111439] text-2xl font-medium">
            Seat Leasing
          </div>
          <div className="text-[#464255] font-light text-base">
            This model is solely for seat rental. The client manages and has
            full access to the center’s operations.
          </div>
          <div className="hidden lg:block">
            <PricingModal />
          </div>
        </div>
        <img
          src="assets/ServiceGroup1.png"
          alt="ServiceGroup1"
          className="lg:relative lg:bottom-24 lg:hidden block py-8"
        />
        <div className="lg:hidden block">
          <PricingModal />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between pt-12">
        <div className="lg:pt-32 flex flex-col gap-8">
          <div className="text-[#111439] text-2xl font-medium">
            Recruitment Process Outsourcing (RPO)
          </div>
          <div className="text-[#464255] font-light text-base">
            This model helps companies to fulfill their internal resources or
            manpower requirements..
          </div>
          <div className="hidden lg:block">
            <PricingModal />
          </div>
        </div>
        <div className="py-8 lg:py-0">
          <img
            src="assets/ServiceGroup2.png"
            alt="ServiceGroup1"
            className="lg:relative lg:top-12"
          />
        </div>
        <div className="lg:hidden block">
          <PricingModal />
        </div>
      </div>
    </div>
  );
}

export default ServiceGroup