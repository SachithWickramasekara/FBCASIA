import React from "react";
import ServicesImage from "../components/FBCServices/ServicesImage";
import LandingForm from "../components/Landing/LandingForm/LandingForm";
import ServiceInboundCard from "../Crads/ServiceInboundCard";
import {
  EngagementModelCardData2,
  InboundServiceData,
  OutBounderviceData,
} from "../constants/ServiceData";
import EngagementModels from "../components/FBCServices/EngagementModels";
import ServiceGroup from "../components/FBCServices/ServiceGroup";
import BOT from "../components/FBCServices/BOT";
import PricingModal from "../components/Modals/PricingModal";

const Services = () => {
  return (
    <div>
      <ServicesImage />
      <div className="flex flex-col lg:flex-row px-4 lg:px-24 py-8 gap-8 lg:gap-[100px] text-[#464255] font-light text-base ">
        <div className="flex flex-col gap-8 ">
          <div className="text-center lg:text-left">
            We provide professional and cost-effective outsourced inbound call
            center services that are flexible and scalable. Our service
            industries include telecom, insurance, healthcare, consulting, and
            accounting.
          </div>
          <div className="text-center lg:text-left">
            As a specialist in outsourced customer services, we are committed to
            training our agents to ensure the service we give your customers is
            of exceptional quality.
          </div>
        </div>
        <div className="text-center lg:text-left">
          Our multi-channel customer support via call, email or webchat enables
          your customers to decide how they wish to reach you.
        </div>
      </div>
      <div className="lg:px-24 px-4 py-8 flex flex-col lg:flex-row lg:text-left text-center gap-8 lg:gap-12 lg:justify-between">
        <div className="lg:text-5xl text-2xl text-[#111439] font-semibold lg:w-[419px]">
          Take a Look at Our Services
        </div>
      </div>
      <div className="text-[#111439] text-xl sm:text-2xl lg:px-24 px-12 font-medium sm:py-12">
        Inbound Services
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:px-24 px-4 sm:py-0 py-12 ">
        {InboundServiceData.map((items, i) => (
          <ServiceInboundCard items={items} key={i} />
        ))}
      </div>
      <div className="text-[#111439] text-xl sm:text-2xl lg:px-24 px-12 font-medium sm:py-12">
        Outbound Services
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:px-24 px-4 sm:py-0 py-12 ">
        {OutBounderviceData.map((items, i) => (
          <ServiceInboundCard items={items} key={i} />
        ))}
      </div>
      <EngagementModels />
      <ServiceGroup />
      <div className="flex lg:flex-row  flex-col lg:gap-32 py-12 lg:py-28  px-4 lg:px-24">
        <div className="flex flex-col gap-12 ">
          <div className="text-[#111439] text-2xl font-medium">Outsourcing</div>
          <div className="text-[#464255] text-base font-light pb-12 lg:pb-0">
            This model benefits companies as a long-term solution. The provider
            manages and has full access to the center’s operations, and assumes
            the delivery risk and productivity incentives.
          </div>
          <div className="hidden lg:block">
            <PricingModal />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {EngagementModelCardData2.map((items, i) => (
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
      <BOT />
      <LandingForm />
    </div>
  );
};

export default Services;
