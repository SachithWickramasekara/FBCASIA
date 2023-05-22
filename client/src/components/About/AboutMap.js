import React from 'react'

const AboutMap = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:w-[985.61px] px-4 lg:px-0 py-20">
        <div className="text-[#111439] lg:text-5xl font-semibold text-2xl text-center pb-12">
          Think Global, Act Global
        </div>
        <div className="text-[#464255] text-base font-light text-center pb-12">
          Our network of specialized outsourced services supports businesses
          around the globe.
        </div>
        <div>
          <img src="assets/HeroMap.png" alt="Map" />
        </div>
        <div className="flex justify-center items-center py-12">
          <button
            className="text-white bg-[#0C2E4E] text-center w-[250px] h-[50px] rounded-xl hover:scale-90 transform transition-all duration-300 ease-in-out"
            onClick={() =>
              window.open("https://meetings.hubspot.com/nesel", "_blank")
            }
          >
            Work with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMap