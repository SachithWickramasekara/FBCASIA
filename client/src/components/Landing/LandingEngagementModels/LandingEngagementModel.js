import React from "react";
import EngagementCard from "../../../Crads/EngagementCard";
import { HeroEngagementCardData } from "../../../constants/HeroData";
import { Link } from "react-router-dom";

const LandingEngagementModel = () => {
  return (
    <div className="lg:px-24 px-8 lg:py-20 py-10 bg-[#F3F3F3] lg:bg-white ">
      <div className="flex flex-row lg:justify-between items-center mb-8">
        <div className="lg:text-5xl text-[18px] md:text-3xl font-semibold text-[#111439] text-center mx-auto sm:mx-0">
          Engagement Models
        </div>
        <Link to="/services">
          <div className="text-[#FF731D] text-xl font-semibold hidden lg:block">
            View more
          </div>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 w-full  justify-evenly">
        {HeroEngagementCardData.map((items, key) => (
          <EngagementCard data={items} key={key} />
        ))}
      </div>
    </div>
  );
};

export default LandingEngagementModel;
