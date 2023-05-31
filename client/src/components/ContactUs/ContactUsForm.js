import React, { useState, useEffect } from "react";
import {
  validateCompanyWebsite,
  validateContactNumber,
  validateEmail,
  // validateEngagementModel,
  validateFirstName,
  //  validateFoundUs,
  validateLastName,
  validateMessage,
} from "../../Validation/validation";
import { Contact } from "../../API";
import InlineError from "../../Validation/inlineError";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [engagementModels, setEngagementModels] = useState("");
  const [message, setMessage] = useState("");
  const [foundUs, setFoundUs] = useState("");

  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();

  const [companyWebsiteError, setCompanyWebsiteError] = useState();
  const [emailError, setEmailError] = useState();
  const [contactNumberError, setContactNumberError] = useState();
  // const [engagementModelsError, setEngagementModelsError] = useState();
  const [messageError, setMessageError] = useState();
  //const [foundUsError, setFoundUsError] = useState();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    // **********validation**********
    validateFirstName({ firstName, setFirstNameError });
    validateLastName({ lastName, setLastNameError });
    validateMessage({ message, setMessageError });
    validateEmail({ email, setEmailError });
    validateCompanyWebsite({ companyWebsite, setCompanyWebsiteError });
    validateContactNumber({ contactNumber, setContactNumberError });
    // validateEngagementModel({ engagementModels, setEngagementModelsError });
    // validateFoundUs({ foundUs, setFoundUsError });

    if (send) {
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setCompanyWebsite("");
      setEmail("");
      setContactNumber("");
      setEngagementModels("");
      setMessage("");
      setFoundUs("");
      setSend(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }
  }, [
    firstName,
    lastName,
    companyName,
    companyWebsite,
    email,
    contactNumber,
    engagementModels,
    message,
    foundUs,
    send,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (
      !firstNameError ||
      !lastNameError ||
      !companyWebsiteError ||
      !emailError ||
      !contactNumberError ||
      //  !engagementModelsError ||
      !messageError
      //   !foundUsError
    ) {
      console.log("Done");
      Contact({
        firstName,
        lastName,
        email,
        contactNumber,
        companyWebsite,
        companyName,
        message,
        engagementModels,
        foundUs,
        setSend,
      }).then(() => setButtonLoading(false));
      console.log(Contact);
    }
  };

  return (
    <div className="bg-[#FAFAFA] p-4">
      <div className="text-[#111439] lg:text-5xl md:text-3xl text-2xl font-semibold text-center lg:text-left py-8 px-4">
        Connect with us
      </div>
      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="flex lg:flex-row flex-col w-full  gap-4 px-4">
          <input
            type="text"
            placeholder="First Name *"
            className="lg:w-1/2 h-[52px]  border border-[#46425533] bg-transparent placeholder:bg-[#FAFAFA] rounded-lg px-4 outline-none"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {firstNameError && <InlineError error={firstNameError} />}
          <input
            type="text"
            placeholder="Last Name *"
            className="lg:w-1/2 h-[52px] border border-[#46425533] bg-transparent placeholder:bg-[#FAFAFA] rounded-lg px-4 outline-none"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {lastNameError && <InlineError error={lastNameError} />}
        </div>
        <div className="flex lg:flex-row flex-col w-full  gap-4 px-4 ">
          <input
            type="text"
            placeholder="Comapany Name *"
            className="lg:w-1/2 h-[52px]  border border-[#46425533] bg-transparent placeholder:bg-[#FAFAFA] rounded-lg px-4 outline-none"
            name="comanyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Company Website *"
            className="lg:w-1/2 h-[52px] border border-[#46425533] bg-transparent placeholder:bg-[#FAFAFA] rounded-lg px-4 outline-none"
            name="companyWebsite"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
            required
          />
          {companyWebsiteError && <InlineError error={companyWebsiteError} />}
        </div>
        <div className="flex lg:flex-row flex-col w-full  gap-4 px-4">
          <input
            type="email"
            placeholder="Email *"
            className="lg:w-1/2 h-[52px]  border border-[#46425533] bg-transparent placeholder:bg-[#FAFAFA] rounded-lg px-4 outline-none"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <InlineError error={emailError} />}
          <input
            type="tel"
            placeholder="Contact Number*"
            className="lg:w-1/2 h-[52px] border border-[#46425533] bg-transparent placeholder:bg-[#FAFAFA] rounded-lg px-4 outline-none"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          {contactNumberError && <InlineError error={contactNumberError} />}
        </div>
        <div className="px-4 h-[55px]">
          <select
            className="w-full bg-transparent h-[52px] rounded-lg outline-none border border-[#46425533] text-gray-400 px-8"
            value={engagementModels}
            onChange={(e) => setEngagementModels(e.target.value)}
          >
            <option value="" disabled selected>
              What engagement models are you int..
            </option>
            <option value="Self Augmentation">Self Augmentation</option>
            <option value="Outsourcing">Outsourcing</option>
            <option value="Recruitment Process Outsourcing">
              Recruitment Process Outsourcing
            </option>
          </select>
        </div>
        <div className="px-4 h-[55px]">
          <select
            className="w-full bg-transparent h-[52px] rounded-lg outline-none border border-[#46425533] text-gray-400 px-8"
            value={foundUs}
            onChange={(e) => setFoundUs(e.target.value)}
          >
            <option value="" disabled selected>
              How did you find out about FBC Asia?
            </option>
            <option value="Internet">Internet</option>
            <option value="Social Media">Social Media</option>
            <option value="From a Friend">From a Friend</option>
          </select>
        </div>
        <div className="px-4">
          <textarea
            placeholder="Message"
            className="text-black w-full h-[96px] lg:md:h-[116px] bg-transparent border border-[#46425533] rounded-lg outline-none px-4 py-4 "
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {messageError && <InlineError error={messageError} />}
        </div>
        <div className="px-4 mx-auto lg:mx-0">
          <button
            className="bg-[#FF731D] text-white text-lg font-semibold rounded-lg h-[52px] w-full lg:w-[160px] mx-auto px-4 py-4"
            type="submit"
            disabled={buttonLoading && true}
          >
            {buttonLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {isSent && (
        <p className="text-center font-light text-xl py-2 text-black">
          Your message has been sent! ✅{" "}
        </p>
      )}
    </div>
  );
};

export default ContactUsForm;
