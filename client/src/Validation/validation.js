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

const validateMiddleName = ({ middleName, setmiddleNameError }) => {
  const firstNameRegex = /^[a-zA-Z]+$/;
  return middleName && !middleName.match(firstNameRegex)
    ? setmiddleNameError("Please enter a valid first name")
    : setmiddleNameError("");
};

const validateLastName = ({ lastName, setLastNameError }) => {
  const lastNameRegex = /^[a-zA-Z]+$/;
  return lastName && !lastName.match(lastNameRegex)
    ? setLastNameError("Please enter a valid last name")
    : setLastNameError("");
};

const validateAddress = ({ address, setAddressError }) => {
  return address && address.length < 10
    ? setAddressError("Address is too short")
    : address && address.length > 500
    ? setAddressError("Try to make it shorter and meaningful")
    : setAddressError("");
};

const validateAddress2 = ({ address2, setAddress2Error }) => {
  return address2 && address2.length < 10
    ? setAddress2Error("Address is too short")
    : address2 && address2.length > 500
    ? setAddress2Error("Try to make it shorter and meaningful")
    : setAddress2Error("");
};

const validateCity = ({ city, setCityError }) => {
  const cityRegex = /^[a-zA-Z]+$/;
  return city && !city.match(cityRegex)
    ? setCityError("Please enter a valid city name")
    : setCityError("");
};

const validateState = ({ state, setStateError }) => {
  const stateRegex = /^[a-zA-Z]+$/;
  return state && !state.match(stateRegex)
    ? setStateError("Please enter a valid state name")
    : setStateError("");
};

const validateZip = ({ zip, setZipError }) => {
  const zipRegex = /^[0-9]+$/;
  return zip && !zip.match(zipRegex)
    ? setZipError("Please enter a valid zip code")
    : setZipError("");
};

const validateCountry = ({ country, setCountryError }) => {
  const countryRegex = /^[a-zA-Z]+$/;
  return country && !country.match(countryRegex)
    ? setCountryError("Please enter a valid country name")
    : setCountryError("");
};

const validateSkypeId = ({ skyeId, setSkyeIdError }) => {
  return skyeId && skyeId.length < 5
    ? setSkyeIdError("Skye Id is too short")
    : skyeId && skyeId.length > 500
    ? setSkyeIdError("Try to make it shorter and meaningful")
    : setSkyeIdError("");
};

const validateEmployeeId = ({ employeeId, setEmployeeIdError }) => {
  return employeeId && employeeId.length < 5
    ? setEmployeeIdError("Employee Id is too short")
    : employeeId && employeeId.length > 500
    ? setEmployeeIdError("Try to make it shorter and meaningful")
    : setEmployeeIdError("");
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

const validateEngagementModel = ({
  engagementModels,
  setEngagementModelsError,
}) => {
  return engagementModels.length === 0
    ? setEngagementModelsError("Please select at least one engagement model")
    : setEngagementModelsError("");
};

const validateFoundUs = ({ foundUs, setFoundUsError }) => {
  return foundUs.length === 0
    ? setFoundUsError("Please select at least one option")
    : setFoundUsError("");
};

export {
  validateEmail,
  validateFirstName,
  validateLastName,
  validateMiddleName,
  validateMessage,
  validateContactNumber,
  validateCompanyName,
  validateCompanyWebsite,
  validateEngagementModel,
  validateFoundUs,
  validateAddress,
  validateAddress2,
  validateCity,
  validateState,
  validateZip,
  validateCountry,
  validateSkypeId,
  validateEmployeeId,

};
