import axios from "axios";

// *********** Send email
export const Connect = async ({ firstName, lastName, message, setSend }) => {
  try {
    const datas = { firstName, lastName, message };
    let res = await axios.post(`http://localhost:5000/connect`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const Subscribe = async ({ email, setSend }) => {
  try {
    const datasEmail = { email };
    let resEmail = await axios.post(
      `http://localhost:5000/subscribe`,
      datasEmail
    );
    if (resEmail) {
      setSend(resEmail.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const Price = async ({ firstName,lastName, email , engagementModel , setSend }) => {
try {
  const datasPrice = { firstName,lastName , email , engagementModel };
  let resPrice = await axios.post(
    `http://localhost:5000/price`,
    datasPrice
  );
  if (resPrice) {
    setSend(resPrice.data);
  }
} catch (error) {
  alert(error.response.data.message);
}
};

export const Contact = async ({
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
}) => {
  try {
    const datasContact = {
      firstName,
      lastName,
      email,
      contactNumber,
      companyWebsite,
      companyName,
      message,
      engagementModels,
      foundUs,
    };
    let resContact = await axios.post(
      `http://localhost:5000/contact`,
      datasContact
    );
    if (resContact) {
      setSend(resContact.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

// *********** Send email
export const Apply = async ({
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
}) => {
  try {
    const datasApply = {
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
    };
    let resApply = await axios.post(`http://localhost:5000/apply`, datasApply);
    if (resApply) {
      setSend(resApply.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
