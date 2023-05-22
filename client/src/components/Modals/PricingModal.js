import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
} from "../../Validation/validation";
import { Price } from "../../API";
import InlineError from "../../Validation/inlineError";

const PricingModal = () => {
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [engagementModel, setEngagementModel] = useState("");

  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailError, setEmailError] = useState();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    // **********validation**********
    validateFirstName({ firstName, setFirstNameError });
    validateLastName({ lastName, setLastNameError });
    validateEmail({ email, setEmailError });

    if (send) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setEngagementModel("");
      setSend(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }
  }, [firstName, lastName, email, engagementModel, send]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (!firstNameError & !lastNameError & !emailError) {
      console.log("Done");
      // *********** Send email ***********
      Price({ firstName, lastName, email, engagementModel, setSend }).then(
        () => {
          setButtonLoading(false);
        }
      );
    }
  };
  console.log(send);

  return (
    <div>
      <button
        className="cursor-pointer bg-none border border-[#FF731D] text-[#FF731D] font-semibold rounded-lg py-2 px-6 hover:bg-[#FF731D] hover:text-white"
        onClick={showModal}
      >
        See Pricing
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={null}
      >
        <div className="text-center font-medium text-xl">Pricing Form</div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="First Name"
            className=" p-2 w-full my-4 outline-none"
            required
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <InlineError error={firstNameError} />}
          <input
            type="text"
            placeholder="Last Name"
            className=" p-2 w-full my-4 outline-none"
            required
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <InlineError error={lastNameError} />}
          <input
            type="email"
            placeholder="Company Email"
            className=" p-2 w-full my-4 outline-none"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <InlineError error={emailError} />}
          <select
            className="p-2 w-full my-4 outline-none"
            value={engagementModel}
            onChange={(e) => setEngagementModel(e.target.value)}
          >
            <option value="" disabled >
              Select Service
            </option>
            <option value="Self Augmentation">Self Augmentation</option>
            <option value="Seat Leasing">Seat Leasing</option>
            <option value="Outsourcing">Outsourcing</option>
            <option value="Recruitment Process Outsourcing">
              Recruitment Process Outsourcing
            </option>
            <option value="Build Operate Transfer">
              Build Operate Transfer
            </option>
          </select>
          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer bg-none border border-[#FF731D] text-[#FF731D] text-base font-medium rounded-lg py-2 px-6 hover:bg-[#FF731D] hover:text-white"
              disabled={buttonLoading && true}
            >
              {buttonLoading ? "Sending..." : "Get Pricing Now"}
            </button>
          </div>
        </form>
        {isSent && (
          <div className="text-center text-green-500 font-medium">
            Your message has been sent! ✅
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PricingModal;
