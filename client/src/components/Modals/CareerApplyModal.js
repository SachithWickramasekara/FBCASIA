import { Modal, Progress } from "antd";
import React, { useEffect, useState } from "react";
import { checkboxData } from "../../constants/CareerData";
import {
  validateAddress,
  validateAddress2,
  validateCity,
  validateCountry,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateMiddleName,
  validateSkypeId,
  validateState,
  validateZip,
} from "../../Validation/validation";
import { Apply } from "../../API";

const CareerApplyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    console.log(fileName);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [skype, setSkype] = useState("");
  const [nextOfKinName, setNextOfKinName] = useState("");
  const [nextOfKinRelationship, setNextOfKinRelationship] = useState("");
  const [nextOfKinContactDetails, setNextOfKinContactDetails] = useState("");
  const [familyBackground, setFamilyBackground] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [workShift, setWorkShift] = useState("");
  const [currentlyEmployed, setCurrentlyEmployed] = useState(false);
  const [bpoExperience, setBpoExperience] = useState("");
  const [marketsServed, setMarketsServed] = useState("");
  const [inboundOrOutbound, setInboundOrOutbound] = useState("");
  const [channels, setChannels] = useState("");
  const [language, setLanguage] = useState("");
  const [fluentLanguage, setFluentLanguage] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [ooklaSpeedTest, setOoklaSpeedTest] = useState("");
  const [internetServiceProviderName, setInternetServiceProviderName] =
    useState("");
  const [
    internetServiceProviderUploadSpeed,
    setInternetServiceProviderUploadSpeed,
  ] = useState("");
  const [
    internetServiceProviderDownloadSpeed,
    setInternetServiceProviderDownloadSpeed,
  ] = useState("");
  const [workSpace, setWorkSpace] = useState("");
  const [brandModelMake, setBrandModelMake] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeRole, setRefereeRole] = useState("");
  const [refereeContactNumber, setRefereeContactNumber] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [referredById, setReferredById] = useState("");
  const [resume, setResume] = useState("");
  const [consent, setConsent] = useState("");

  // const [firstNameError, setFirstNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");
  // const [middleNameError, setMiddleNameError] = useState("");
  // const [addressError, setAddressError] = useState("");
  // const [address2Error, setAddress2Error] = useState("");
  // const [cityError, setCityError] = useState("");
  // const [stateError, setStateError] = useState("");
  // const [zipError, setZipError] = useState("");
  // const [countryError, setCountryError] = useState("");
  // const [phoneError, setPhoneError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [skypeError, setSkypeError] = useState("");
  // const [nextOfKinNameError, setNextOfKinNameError] = useState("");
  // const [nextOfKinRelationshipError, setNextOfKinRelationshipError] =
  //   useState("");
  // const [nextOfKinContactDetailsError, setNextOfKinContactDetailsError] =
  //   useState("");
  // const [familyBackgroundError, setFamilyBackgroundError] = useState("");
  // const [fullTimeError, setFullTimeError] = useState("");
  // const [workShiftError, setWorkShiftError] = useState("");
  // const [currentlyEmployedError, setCurrentlyEmployedError] = useState("");
  // const [bpoExperienceError, setBpoExperienceError] = useState("");
  // const [marketsServedError, setMarketsServedError] = useState("");
  // const [inboundOrOutboundError, setInboundOrOutboundError] = useState("");
  // const [channelsError, setChannelsError] = useState("");
  // const [languageError, setLanguageError] = useState("");
  // const [fluentLanguageError, setFluentLanguageError] = useState("");
  // const [currentSalaryError, setCurrentSalaryError] = useState("");
  // const [expectedSalaryError, setExpectedSalaryError] = useState("");
  // const [ooklaSpeedTestError, setOoklaSpeedTestError] = useState("");
  // const [
  //   internetServiceProviderNameError,
  //   setInternetServiceProviderNameError,
  // ] = useState("");
  // const [
  //   internetServiceProviderUploadSpeedError,
  //   setInternetServiceProviderUploadSpeedError,
  // ] = useState("");
  // const [
  //   internetServiceProviderDownloadSpeedError,
  //   setInternetServiceProviderDownloadSpeedError,
  // ] = useState("");
  // const [workSpaceError, setWorkSpaceError] = useState("");
  // const [brandModelMakeError, setBrandModelMakeError] = useState("");
  // const [processorError, setProcessorError] = useState("");
  // const [memoryError, setMemoryError] = useState("");
  // const [refereeNameError, setRefereeNameError] = useState("");
  // const [refereeRoleError, setRefereeRoleError] = useState("");
  // const [refereeContactNumberError, setRefereeContactNumberError] =
  //   useState("");
  // const [refereeEmailError, setRefereeEmailError] = useState("");
  // const [referredByError, setReferredByError] = useState("");
  // const [referredByIdError, setReferredByIdError] = useState("");
  // const [resumeError, setResumeError] = useState("");
  // const [consentError, setConsentError] = useState("");

  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    // validateFirstName({ firstName, setFirstNameError });
    // validateMiddleName({ middleName, setMiddleNameError });
    // validateLastName({ lastName, setLastNameError });
    // validateAddress({ address, setAddressError });
    // validateAddress2({ address2, setAddress2Error });
    // validateCity({ city, setCityError });
    // validateState({ state, setStateError });
    // validateZip({ zip, setZipError });
    // validateCountry({ country, setCountryError });
    // validateEmail({ email, setEmailError });
    // validateSkypeId({ skype, setSkypeError });
    // validateFirstName({ nextOfKinName, setNextOfKinNameError });

    if (send) {
      setFirstName("");
      setLastName("");
      setMiddleName("");
      setAddress("");
      setAddress2("");
      setCity("");
      setState("");
      setZip("");
      setCountry("");
      setPhone("");
      setEmail("");
      setSkype("");
      setNextOfKinName("");
      setNextOfKinRelationship("");
      setNextOfKinContactDetails("");
      setFamilyBackground("");
      setFullTime("");
      setWorkShift("");
      setCurrentlyEmployed("");
      setBpoExperience("");
      setMarketsServed("");
      setInboundOrOutbound("");
      setChannels("");
      setLanguage("");
      setFluentLanguage("");
      setCurrentSalary("");
      setExpectedSalary("");
      setOoklaSpeedTest("");
      setInternetServiceProviderName("");
      setInternetServiceProviderUploadSpeed("");
      setInternetServiceProviderDownloadSpeed("");
      setWorkSpace("");
      setBrandModelMake("");
      setProcessor("");
      setMemory("");
      setRefereeName("");
      setRefereeRole("");
      setRefereeContactNumber("");
      setRefereeEmail("");
      setReferredBy("");
      setReferredById("");
      setResume("");
      setConsent("");

      setSend(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }
  }, [
    firstName,
    lastName,
    middleName,
    address,
    address2,
    city,
    state,
    zip,
    country,
    phone,
    email,
    skype,
    nextOfKinName,
    nextOfKinRelationship,
    nextOfKinContactDetails,
    familyBackground,
    fullTime,
    workShift,
    currentlyEmployed,
    bpoExperience,
    marketsServed,
    inboundOrOutbound,
    channels,
    language,
    fluentLanguage,
    currentSalary,
    expectedSalary,
    ooklaSpeedTest,
    internetServiceProviderName,
    internetServiceProviderUploadSpeed,
    internetServiceProviderDownloadSpeed,
    workSpace,
    brandModelMake,
    processor,
    memory,
    refereeName,
    refereeRole,
    refereeContactNumber,
    refereeEmail,
    referredBy,
    referredById,
    resume,
    consent,
    send,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (
      // !firstNameError ||
      // !lastNameError ||
      // !middleNameError ||
      // !addressError ||
      // !address2Error ||
      // !cityError ||
      // !stateError ||
      // !zipError ||
      // !countryError ||
      // !phoneError ||
      // !emailError ||
      // !skypeError ||
      // !nextOfKinNameError ||
      // !nextOfKinRelationshipError ||
      // !nextOfKinContactDetailsError ||
      // !familyBackgroundError ||
      // !fullTimeError ||
      // !workShiftError ||
      // !currentlyEmployedError ||
      // !bpoExperienceError ||
      // !marketsServedError ||
      // !inboundOrOutboundError ||
      // !channelsError ||
      // !languageError ||
      // !fluentLanguageError ||
      // !currentSalaryError ||
      // !expectedSalaryError ||
      // !ooklaSpeedTestError ||
      // !internetServiceProviderNameError ||
      // !internetServiceProviderUploadSpeedError ||
      // !internetServiceProviderDownloadSpeedError ||
      // !workSpaceError ||
      // !brandModelMakeError ||
      // !processorError ||
      // !memoryError ||
      // !refereeNameError ||
      // !refereeRoleError ||
      // !refereeContactNumberError ||
      // !refereeEmailError ||
      // !referredByError ||
      // !referredByIdError ||
      // !resumeError ||
      // !consentError
      true
    ) {
      console.log("Done");
      Apply({
        firstName,
        lastName,
        middleName,
        address,
        address2,
        city,
        state,
        zip,
        country,
        phone,
        email,
        skype,
        nextOfKinName,
        nextOfKinRelationship,
        nextOfKinContactDetails,
        familyBackground,
        fullTime,
        workShift,
        currentlyEmployed,
        bpoExperience,
        marketsServed,
        inboundOrOutbound,
        channels,
        language,
        fluentLanguage,
        currentSalary,
        expectedSalary,
        ooklaSpeedTest,
        internetServiceProviderName,
        internetServiceProviderUploadSpeed,
        internetServiceProviderDownloadSpeed,
        workSpace,
        brandModelMake,
        processor,
        memory,
        refereeName,
        refereeRole,
        refereeContactNumber,
        refereeEmail,
        referredBy,
        referredById,
        resume,
        consent,
        setSend,
      }).then(() => setButtonLoading(false));
    }
  };

  const handleEmploymentChange = (e) => {
    setCurrentlyEmployed(e.target.value === "yes");
  };

  return (
    <div>
      <button
        className="border border-[#0C2E4E] text-[#0C2E4E] text-base font-semibold py-2 sm:px-12 px-6 rounded-md cursor-pointer hover:scale-95"
        onClick={showModal}
      >
        Apply
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={null}
        width={1000}
        bodyStyle={{ height: 500, overflowY: "scroll", marginTop: "30px" }}
        className="checkboxScrollbar"
      >
        <div className="flex flex-row gap-2">
          <span className="text-3xl font-medium text-[#111439] underline">
            Apply
          </span>
          <span className="text-3xl font-medium text-[#FF731D] underline">
            Now
          </span>
        </div>
        <form className="p-5 flex flex-col gap-2" onSubmit={submitHandler}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
            <div className="flex flex-col w-full gap-2">
              <span>First Name</span>
              <input
                type="text"
                placeholder="Name"
                name="firstName"
                value={firstName}
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col  w-full gap-2">
              <span>Middle Name</span>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="flex flex-col  w-full gap-2">
              <span>Surname</span>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Address</span>
            <input
              type="text"
              placeholder="Address"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span>Address Line 2</span>
            <input
              type="text"
              placeholder="Address"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="address2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
              <div className="w-full flex flex-col gap-2">
                <span>City</span>
                <input
                  type="text"
                  placeholder="City"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <span>State /Province /Region</span>
                <input
                  type="text"
                  placeholder="State /Province /Region"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full ">
            <div className="w-full flex flex-col gap-2 ">
              <span>Zip /Postal Code</span>
              <input
                type="text"
                placeholder="Zip /Postal Code"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <span>Country</span>
              <input
                type="text"
                placeholder="State /Province /Region"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="lg:w-1/2 w-full pr-4 flex flex-col gap-2">
              <span>Phone Number</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="lg:w-1/2 w-full pr-4 flex flex-col gap-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="lg:w-1/2 w-full pr-4 flex flex-col gap-2">
              <span>Skype Address</span>
              <input
                type="text"
                placeholder="Skype Address"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="skype"
                value={skype}
                onChange={(e) => setSkype(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Next of Kin</span>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                    name="nextOfKinName"
                    value={nextOfKinName}
                    onChange={(e) => setNextOfKinName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Relationship"
                    className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                    name="nextOfKinRelationship"
                    value={nextOfKinRelationship}
                    onChange={(e) => setNextOfKinRelationship(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Contact Details"
                    className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                    name="nextOfKinContactDetails"
                    value={nextOfKinContactDetails}
                    onChange={(e) => setNextOfKinContactDetails(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>What is your family background? (Spouse/Kids/Parents)</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full h-[100px] py-2 px-4 outline-none"
              name="familyBackground"
              value={familyBackground}
              onChange={(e) => setFamilyBackground(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Are you available to work full time?</span>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="full-time"
                value="yes"
                onChange={(e) => setFullTime(e.target.value)}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="full-time"
                value="no"
                onChange={(e) => setFullTime(e.target.value)}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>What work shift are you able to work for?*</span>
            <select
              className="border border-[#46425580] rounded-md w-full lg:w-1/2 py-2 px-4 outline-none"
              value={workShift}
              onChange={(e) => setWorkShift(e.target.value)}
            >
              <option value="Night shift">USA - Night Shift</option>
              <option value="Uk - Mid Shift">UK - Mid Shift</option>
              <option value="Australia Day Shift">Australia - Day Shift</option>
              <option value="Flexible Hours">Flexible Hours</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span>Are you currently employed or was previously employed?*</span>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="full-time"
                value="yes"
                checked={currentlyEmployed}
                onChange={handleEmploymentChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="full-time"
                value="no"
                checked={!currentlyEmployed}
                onChange={handleEmploymentChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>How long have you worked in BPO/Call Center Industry?</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="bpoExperience"
              value={bpoExperience}
              onChange={(e) => setBpoExperience(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>What markets have you served? (USA, UK, Australia etc)</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="marketsServed"
              value={marketsServed}
              onChange={(e) => setMarketsServed(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>Inbound or Outbound?</span>
            <select className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none">
              <option
                value="InBound"
                onChange={(e) => setInboundOrOutbound(e.target.value)}
              >
                Inbound
              </option>
              <option
                value="OutBound"
                onChange={(e) => setInboundOrOutbound(e.target.value)}
              >
                Outbound
              </option>
            </select>
          </div>
          <div>
            <span>What Channels are your familiar with?</span>
            {checkboxData.map((data, i) => (
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="terms"
                  value="terms"
                  id={i.id}
                  onChange={(e) => setChannels(e.target.value)}
                />
                <label htmlFor="terms" className="font-light">
                  {data.name}
                </label>
              </div>
            ))}
            <span>
              Tick the boxes that applicable only from your job experience.
            </span>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>What language do you speak?</span>
            <select
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Multi-lingual">Multi-lingual</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>What languages are you fluent with apart from English?</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="fluentLanguage"
              value={fluentLanguage}
              onChange={(e) => setFluentLanguage(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>Current Salary in Pesos</span>
            <input
              type="number"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="currentSalary"
              value={currentSalary}
              onChange={(e) => setCurrentSalary(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 w-full">
            <span>Expected Salary in Pesos</span>
            <input
              type="number"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="expectedSalary"
              value={expectedSalary}
              onChange={(e) => setExpectedSalary(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>OOKLA speed test results</span>
            <input
              type="file"
              className=""
              onChange={handleFileChange}
              name="ooklaSpeedTest"
              value={ooklaSpeedTest}
            />
            <span className="font-light">
              Accepted file types: pdf, doc, rtf, jpg, jpeg, Max. file size: 15
              MB.
            </span>
            <span className="font-light">
              Please use
              <a
                href="https://www.speedtest.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF731D]"
              >
                https://www.speedtest.net
              </a>
              to run a bandwidth test and share a screenshot of the results.
            </span>
          </div>
          <span className="">Internet Service Provider Details</span>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                  placeholder="Service Provider?"
                  name="internetServiceProviderName"
                  value={internetServiceProviderName}
                  onChange={(e) =>
                    setInternetServiceProviderName(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                  placeholder="Upload Speed"
                  name="internetServiceProviderUploadSpeed"
                  value={internetServiceProviderUploadSpeed}
                  onChange={(e) =>
                    setInternetServiceProviderUploadSpeed(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  placeholder="Download Speed"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                  name="internetServiceProviderDownloadSpeed"
                  value={internetServiceProviderDownloadSpeed}
                  onChange={(e) =>
                    setInternetServiceProviderDownloadSpeed(e.target.value)
                  }
                />
              </div>
            </div>
            <span className="font-light">
              Please refer the results of the above speed test and update the
              upload and download speeds along with the details of your service
              provider.
            </span>
            <div>
              <span className="">
                What is the specs of the laptop / desktop you use?
              </span>
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row gap-2 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                      placeholder="Brand, Model & Make?"
                      name="brandModelMake"
                      value={brandModelMake}
                      onChange={(e) => setBrandModelMake(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                      placeholder="Processor i5 / i3 ?"
                      name="processor"
                      value={processor}
                      onChange={(e) => setProcessor(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      placeholder="Memory ?"
                      className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                      name="memory"
                      value={memory}
                      onChange={(e) => setMemory(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Do you have dedicated space to work from home?</span>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="full-time"
                value="yes"
                onChange={(e) => setWorkSpace(e.target.value)}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="radio"
                name="full-time"
                value="no"
                onChange={(e) => setWorkSpace(e.target.value)}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <span>Submit two referees and relevant contact details here</span>
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="refereeName"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Role"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="refereeRole"
              value={refereeRole}
              onChange={(e) => setRefereeRole(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              name="refereeEmail"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>
              Were you referred by an existing FBC employee? If yes, write their
              name and employee ID below.
            </span>
            <div className="w-full flex flex-col lg:flex-row gap-2">
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="referredBy"
                value={referredBy}
                onChange={(e) => setReferredBy(e.target.value)}
              />
              <input
                type="text"
                placeholder="FBC Employee ID"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                name="referredById"
                value={referredById}
                onChange={(e) => setReferredById(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Please attach your latest resume.</span>
            <input type="file" className="" onChange={handleFileChange} />
            <span className="font-light">
              Accepted file types: pdf, doc, rtf, jpg, jpeg, Max. file size: 15
              MB.
            </span>
            <span>Maximum File size 15MB</span>
          </div>
          <span>Consent</span>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name="terms"
                value="terms"
                id="terms"
                onChange={(e) => setConsent(e.target.value)}
              />
              <label htmlFor="terms" className="font-light">
                I hereby agree that all the information submitted are accurate
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              value="Submit"
              className="cursor-pointer border border-[#FF731D] text-[#FF731D;] py-1 text-base px-3 rounded-sm hover:bg-[#FF731D] hover:text-white transition-all duration-300 ease-in-out"
            >
              {buttonLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CareerApplyModal;
