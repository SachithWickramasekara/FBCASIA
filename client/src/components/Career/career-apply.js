import React from "react";
import CareerCard from "../../Crads/CareerCard";
import { careerCardData } from "../../constants/CareerData";

const CareerApplication = () => {
  return (
    <div className="sm:px-24 px-4 lg:pb-20 pb-10 bg-red-300">
      <div className="flex flex-col">
        {careerCardData.map((item, i) => (
          <CareerCard key={i} objects={item} />
        ))}
      </div>
    </div>
  );
};

export default CareerApplication;
