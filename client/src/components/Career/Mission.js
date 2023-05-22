/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { buttons_Mission } from "../../constants/Buttons";
import { careerCardData } from "../../constants/CareerData";
import CareerCard from "../../Crads/CareerCard";

const Mission = () => {
  const [selectedButton, setSelectedButton] = useState(1); // 1 represents "All"

  return (
    <div className="lg:px-20 px-8 py-6 lg:pt-20">
      <div className="text-[#111439] lg:text-5xl font-semibold lg:text-center lg:py-12 py-4 text-2xl">
        Be a part of our Mission
      </div>
      <div className="text-[#464255] text-base font-light lg:text-center lg:w-[566px] lg:mx-auto">
        We are looking for passionate people to join us on our mission. We value
        flat hierarchies, clear communication, and full responsibility.
      </div>
      <div className="flex flex-row gap-4 py-12 lg:px-12 overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
        {buttons_Mission.map((item) => (
          <button
            key={item.id}
            className={`btn ${
              selectedButton === item.id
                ? "active bg-[#FF731D] text-white  outline-none "
                : "border-[#46425580] text-[#46425580]  outline-none"
            } w-auto px-4 py-1 border  rounded-md text-sm font-normal  hover:bg-[#FF731D] hover:text-white hover:border-none hover:outline-none'`}
            onClick={() => setSelectedButton(item.id)}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="sm:px-12 lg:pb-20 pb-10">
        <div className="flex flex-col">
          {careerCardData
            .filter((item) =>
              selectedButton === 1
                ? true
                : item.title
                    .toLowerCase()
                    .includes(
                      buttons_Mission[selectedButton - 1].text.toLowerCase()
                    )
            )
            .map((item) => (
              <CareerCard key={item.id} objects={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
