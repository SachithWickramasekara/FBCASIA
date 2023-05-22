import React from "react";
import Image from "./Image";

const LandingImage = () => {
  return (
    <div className="flex flex-col">
      <Image />
      <div className="flex flex-col px-2 sm:px-24 py-12  text-center gap-y-8">
        <div className="text-[#111439] text-3xl font-bold lg:text-6xl md:4xl">
          Faster. Better. Cheaper.
        </div>
        <div className="text-[#464255] text-base lg:w-[780px] flex mx-auto">
          FBC Asia Pacific is an outsourced customer service provider offering
          call center services for inbound, outbound, and omni-channel support.
          We provide voice, chat, administrative, and specialist support
          services out of our delivery centers in the Philippines and Sri Lanka.
          Our engagement model is robust and transparent with cutting-edge
          remote working solutions.
        </div>
        <div className="pb-12">
          <button
            className="text-white w-[299px] h-[70px] bg-[#0C2E4E] rounded-lg font-semibold hover:scale-90 transform transition-all duration-300 ease-in-out"
            onClick={() =>
              window.open("https://meetings.hubspot.com/nesel", "_blank")
            }
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <div className="pb-16">
        <img
          src="assets/sponsors_logos.png"
          alt="sponsors"
          className="lg:w-full"
        />
      </div>
    </div>
  );
};

export default LandingImage;
