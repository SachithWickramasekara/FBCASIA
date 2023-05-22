const validateEmail = ({ email, setEmailError }) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegex)
    ? setEmailError("Email not valid")
    : setEmailError("");
};

const validateFirstName = ({ firstName, setFirstNameError }) => {
  const firstNameRegex = /^[a-zA-Z]+$/;
  return firstName && !firstName.match(firstNameRegex)
    ? setFirstNameError("Please enter a valid first name")
    : setFirstNameError("");
};

const validateLastName = ({ lastName, setLastNameError }) => {
  const lastNameRegex = /^[a-zA-Z]+$/;
  return lastName && !lastName.match(lastNameRegex)
    ? setLastNameError("Please enter a valid last name")
    : setLastNameError("");
};

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError("Message is too short")
    : message && message.length > 500
    ? setMessageError("Try to make it shorter and meaningful")
    : setMessageError("");
};

const validateContactNumber = ({ contactNumber, setContactNumberError }) => {
  const contactNumberRegex = /^[0-9]+$/;
  return contactNumber && !contactNumber.match(contactNumberRegex)
    ? setContactNumberError("Please enter a valid contact number")
    : setContactNumberError("");
};

const validateCompanyName = ({ companyName, setCompanyNameError }) => {
  const companyNameRegex = /^[a-zA-Z]+$/;
  return companyName && !companyName.match(companyNameRegex)
    ? setCompanyNameError("Please enter a valid company name")
    : setCompanyNameError("");
};

const validateCompanyWebsite = ({ companyWebsite, setCompanyWebsiteError }) => {
  const companyWebsiteRegex =
    /^(http(s)?:\/\/)?([a-zA-Z]+\.)+[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return companyWebsite && !companyWebsite.match(companyWebsiteRegex)
    ? setCompanyWebsiteError("Please enter a valid company website")
    : setCompanyWebsiteError("");
};


const validateEngagementModel = ({ engagementModels, setEngagementModelsError }) => {
  return engagementModels.length === 0
    ? setEngagementModelsError("Please select at least one engagement model")
    : setEngagementModelsError("");
};

const validateFoundUs = ({ foundUs, setFoundUsError }) => {
  return foundUs.length === 0
    ? setFoundUsError("Please select at least one option")
    : setFoundUsError("");
};

export { validateEmail, validateFirstName, validateLastName, validateMessage ,validateContactNumber,validateCompanyName,validateCompanyWebsite,validateEngagementModel,validateFoundUs};
