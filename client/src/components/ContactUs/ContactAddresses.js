import React, { useState } from "react";
import { contactAddressData } from "../../constants/ContactData";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {MdEmail} from 'react-icons/md'
const ContactAddresses = () => {
  const [selectedCountry, setSelectedCountry] = useState("Philippines");

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <div>
        {selectedCountry === "Philippines" && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.255377454899!2d121.05803507479315!3d14.584518785899933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c811bca24911%3A0x5e2b34316435f78e!2sFBC%20Asia%20Pacific%20Inc!5e0!3m2!1sen!2slk!4v1684851491019!5m2!1sen!2slk"
            className="w-full h-[400px]"
            allowFullScreen={true}
            loading="lazy"
          />
        )}
        {selectedCountry === "Australia" && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.989326692624!2d145.04983318330164!3d-37.88393229965384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a217d2c9489%3A0xe2d59bf4faab43d3!2sSuite%203%2F1044A%20Dandenong%20Rd%2C%20Carnegie%20VIC%203163%2C%20Australia!5e0!3m2!1sen!2slk!4v1684852049308!5m2!1sen!2slk"
            className="w-full h-[400px]"
            allowfullscreen=""
            loading="lazy"
          />
        )}
      </div>
      <div className="bg-[#0C2E4E] px-6 py-10 lg:px-20 lg:py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {contactAddressData.map((item, i) => (
          <div
            key={i}
            className="text-gray-300 font-light  flex flex-col gap-4 py-6"
            onClick={() => handleCountryClick(item.country)}
          >
            <div className="text-white hover:text-[#FF731D]">
              {item.country}
            </div>
            <div className="w-full flex flex-row gap-4 hover:text-white">
              <BiMap size={20} className="text-white"/>
              <span className="w-[172px]">{item.address}</span>
            </div>
            <div className="w-full flex flex-row gap-4 hover:text-white">
              <BiPhoneCall size={20} className="text-white"/>
              <span className="w-[172px]">{item.phone}</span>
            </div>
            <div className="w-full flex flex-row gap-4 hover:text-white">
             <MdEmail size={20} className="text-white"/>
              <span className="w-[172px]">{item.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAddresses;
