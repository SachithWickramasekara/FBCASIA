import React from 'react'
import PricingModal from '../Modals/PricingModal';

const BOT = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-40 lg:py-24 py-0">
      <div className="hidden lg:block">
        <img src="assets/BOT.png" alt="BOT" />
      </div>
      <div className="px-4 lg:px-0">
        <div className="text-[#111439] text-xl lg:text-2xl font-medium pb-12">
          Build, Operate, Transfer (BOT)
        </div>
        <div className="lg:w-[744px] text-[#464255] text-base font-light">
          This model benefits companies that do not have an existing registered
          entity in the Philippines but plans to have a registered entity in the
          future.
          <br />
          <br />
          FBC provides end-to-end services including setting up the legal
          entity, hiring manpower, implementing processes, and managing the
          center on behalf of the client, and the legal entity is transferred to
          the client upon their request.
        </div>
        <div className="py-10">
          <PricingModal />
        </div>
      </div>
      <div className="lg:hidden md:mx-auto block md:pb-12">
        <img src="assets/BOT2.png" alt="BOT" />
      </div>
    </div>
  );
}

export default BOT