import React from 'react'

const EngagementCard = ({data}) => {
  return (
    <div className="lg:hover:bg-[#FF731D] bg-white lg:bg-none lg:hover:text-white flex flex-col px-4 py-4 rounded-xl gap-2 w-full">
      <div className="w-full">
        <img
          src={data.path}
          alt="engagement icon"
          className="w-full object-cover"
        />
      </div>
      <div className="lg:text-left text-center font-semibold my-2">{data.SubTitle}</div>
      <div className="lg:text-left text-center lg:w-[317px] mx-auto sm:mx-0 font-light">
        {data.description}
      </div>
    </div>
  );
}

export default EngagementCard