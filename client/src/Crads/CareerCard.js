import React from "react";
import { Divider } from "antd";
import CareerApplyModal from "../components/Modals/CareerApplyModal";

const CareerCard = ({ objects }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center lg:gap-[400px] md:gap-[200px] gap-7">
        <div className="w-full">
          <div className="text-[#0C2E4E] sm:text-lg text-base  font-normal">
            {objects.title}
          </div>
          <div className="flex flex-row justify-between py-2">
            <div className="flex flex-row gap-2">
              <img src={objects.icon1} alt="icon1" />
              <div className="text-[#464255] sm:text-sm text-[11px] font-normal">
                {objects.location}
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img src={objects.icon2} alt="icon1" />
              <div className="text-[#464255] sm:text-sm text-[11px] font-normal">
                {objects.duration}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <CareerApplyModal />
        </div>
      </div>
      <Divider className="bg-[#46425533]" />
    </div>
  );
};

export default CareerCard;
