import React, { useEffect, useState } from "react";
import {
  validateFirstName,
  validateLastName,
  validateMessage,
} from "../../../Validation/validation";
import InlineError from "../../../Validation/inlineError";
import { Connect } from "../../../API/index"

const LandingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [messageError, setMessageError] = useState();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    // **********validation**********
    validateFirstName({ firstName, setFirstNameError });
    validateLastName({ lastName, setLastNameError });
    validateMessage({ message, setMessageError });

    if (send) {
      setFirstName("");
      setLastName("");
      setMessage("");
      setSend(false);
      setIsSent(true); 
      setTimeout(() => setIsSent(false), 3000);
    }
  }, [firstName, lastName, message, send]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
   if (!firstNameError & !lastNameError & !messageError) {
      console.log("Done");
      // *********** Send email ***********
      Connect({ firstName, lastName, message, setSend }).then(() => {
        setButtonLoading(false);
      });
    }
  };
  console.log(send);
  console.log(firstNameError);

  return (
    <div className="bg-[#0C2E4E] flex flex-col items-start lg:py-28 py-12 px-4 w-full gap-4">
      <div className="flex flex-col  mx-auto">
        <div className=" text-white lg:text-5xl font-semibold lg:text-left text-center text-2xl py-8">
          Connect with us
        </div>
        <div className="text-base text-center lg:text-left text-white pb-8">
          Begin your outsourcing experience with a reliable partner
        </div>
        <form className="text-white" onSubmit={submitHandler}>
          <div className="flex flex-col lg:flex-row lg:gap-8  gap-2 justify-center items-center lg:w-[895px]  w-full pt-2 lg:py-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-[55px] rounded-lg px-4 border border-white bg-transparent"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {firstNameError && <InlineError error={firstNameError} />}
            </div>
            <div className="w-full ">
              <input
                type="text"
                placeholder=" Last Name"
                className="w-full h-[55px] rounded-lg px-4 border border-white bg-transparent"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {lastNameError && <InlineError error={lastNameError} />}
            </div>
          </div>
          <div className="lg:w-[895px] w-full lg:py-4 pt-2 pb-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Message"
                className="w-full h-[96px] rounded-lg px-4 border border-white bg-transparent"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              {messageError && <InlineError error={messageError} />}
            </div>
          </div>
          <div className="flex mx-auto">
            <button
              className="bg-[#FF731D] w-[160px] h-[50px] rounded-lg text-white font-semibold"
              type="submit"
              disabled={buttonLoading && true}
            >
              {buttonLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        {isSent && <p className="text-center font-light text-xl py-2 text-white">Your message has been sent! ✅ </p>}
      </div>
    </div>
  );
};

export default LandingForm;
