import React from 'react'
import { SharingCardData } from '../../../constants/HeroData'
import InsightCard from '../../../Crads/InsightCard'
import { Link } from 'react-router-dom';

const ShareInsights = () => {
  return (
    <div className="lg:px-24 bg-[#0C2E4E] py-12 text-white">
      <div className="text-center lg:text-left text-2xl lg:text-5xl mb-8">
        Share Insights
      </div>
      <div className="flex flex-row justify-between items-center my-4">
        <div className="lg:w-[726px] text-center lg:text-left text-gray-300 text-[18px] lg:ml-4">
          Find information and resources on everything outsourcing.From Customer
          Service, changes in the industry and helpful bits.
        </div>
        <Link to="/blog">
          <div className="text-[#FF731D] text-xl font-semibold hidden lg:block">
            View More
          </div>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
        {SharingCardData.map((data, index) => (
          <InsightCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ShareInsights