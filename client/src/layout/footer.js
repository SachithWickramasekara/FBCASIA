import React, { useEffect, useState } from "react";
import { validateEmail } from "../Validation/validation";
import { Subscribe } from "../API";
import InlineError from "../Validation/inlineError";
import {BsFillTelephoneFill} from "react-icons/bs"

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    validateEmail({ email, setEmailError });
    if (send) {
      setEmail("");
      setSend(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }
  }, [email, send]);

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    if (setEmailError) {
      console.log("Done");
      // *********** Send email ***********
      Subscribe({ email, setSend }).then(() => {
        setButtonLoading(false);
      });
    }
  };
  console.log(send);
  console.log(emailError);

  if (window.innerWidth >= 768) {
    return (
      <div className="relative">
        <div className="bg-white pt-24 relative">
          <form
            className="flex flex-col gap-4 rounded-xl lg:w-[780px] md:w-full w-full h-[251px] bg-[#FF731D] mx-auto relative top-10 justify-center items-center"
            onSubmit={submitHandler}
          >
            <div className="text-2xl text-white font-[600]">
              Stay up to Date
            </div>
            <div className="text-base text-white font-[300]">
              Subscribe to our monthly newsletter
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-[#FF731D] border rounded-md border-white">
                <input
                  type="email"
                  placeholder="Email"
                  id="footerEmail"
                  className="w-[292px] h-10 placeholder-white text-white bg-[#FF731D] rounded-md px-4 outline-none"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <InlineError error={emailError} />}
              </div>
              <button
                className="w-[160px] h-[42px] bg-white text-[#FF731D] rounded-md font-[600]"
                type="submit"
                disabled={buttonLoading && true}
              >
                {buttonLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
          {isSent && 
            <p className="text-center font-light text-xl py-2 text-white">
              Thank you for subscribing our Newsletter 🤩{" "}
            </p>
          }
        </div>
        <div className="bg-[#0C2E4E] px-20 grid grid-cols-4 gap-8 text-white pt-28">
          <div className="flex flex-col gap-4">
            <div>
              <img src="assets/LogoFooter.png" alt="footer-logo" />
            </div>
            <div>
              FBC Asia Pacific provides leading-edge Outsourcing and Offshore
              programs using Artificial Intelligence, chatbots, and other
              emerging technologies to help companies maximize their revenue
              goals.
            </div>
            <div className="text-white text-base mt-12">Strategic Partner</div>
            <div>
              <img src="assets/SalesRainLogoFooter.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>FBC Asia Pacific</div>
            <div className="flex flex-col gap-2">
              <div>About</div>
              <div>FBC Difference</div>
              <div>Careers</div>
              <div>Contact</div>
              <div>Outsourcing Glossary</div>
              <div>FAQ</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Engagement Models</div>
            <div className="flex flex-col gap-2">
              <div>Staff Augmentation</div>
              <div>Seat Leasing</div>
              <div>Outsourcing</div>
              <div>Recruitment Process Outsourcing</div>
              <div>Build, Operate, Transfer</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Get in Touch</div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4 items-center">
               <BsFillTelephoneFill className = "text-white"/>
                <div>
                  <div className="flex flex-col gap-y-4">
                    +63 917 509 7752 (The Philippines)
                  </div>
                  <div>+94 11 514 6699 (Sri Lanka)</div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center mt-4">
                <div className="w-[30px] ">
                  <img src="assets/EmailVector.png" alt="tele" />
                </div>
                <div>info@fbcapac.com</div>
              </div>
              <div>
                <div className="flex flex-row gap-4 mt-8 items-center">
                  <div className="w-6 h-6">
                    <img
                      src="assets/FacebookVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src="assets/TwitterVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src="assets/InstaVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src="assets/LinkedinVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-[#0C2E4E] px-20">
          <hr className="text-white h-2 w-full" />
          <div className="flex mx-auto justify-center text-sm font-light text-gray-400 pt-6 pb-12">
            Copyright @ FBC Asia Pacific Inc. 2023. All Rights Reserved.
          </div>
        </div>
      </div>
    );
  } else if (window.innerWidth < 768) {
    return (
      <div className="flex flex-col">
        <form
          className="bg-[#FF731D] px-4 flex flex-col justify-center items-center text-white gap-4 py-16"
          onSubmit={submitHandler}
        >
          <div className="text-2xl font-semibold">Stay up to Date</div>
          <div className="font-light text-base">
            Subscribe to our monthly newsletter
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email"
              id="footerEmail"
              className="h-[40px] w-[362px] px-4 bg-transparent text-white placeholder-white border rounded-lg border-white"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
            {emailError && <InlineError error={emailError} />}
          </div>
          <div>
            <button
              className="w-[187px] h-[57px] rounded-lg bg-white text-[#FF731D]"
              type="submit"
              disabled={buttonLoading && true}
            >
              Subscribe
            </button>
          </div>
        </form>
        <div className="bg-[#0C2E4E] px-4 py-8">
          <div>
            <img src="assets/LogoFooter.png" alt="logo" className="w-[200px]" />
          </div>
          <div className="text-white text-base font-light">
            FBC Asia Pacific provides leading-edge Outsourcing and Offshore
            programs using Artificial Intelligence, chatbots, and other emerging
            technologies to help companies maximize their revenue goals.
          </div>
          <div className="flex flex-row gap-8 py-8">
            <div className="text-white">
              <div className="text-base  font-semibold pb-8">
                FBC Asia Pacific
              </div>
              <div>About</div>
              <div>FBC Difference</div>
              <div>Careers</div>
              <div>Contact</div>
              <div>Outsourcing Glossary</div>
              <div>FAQ</div>
            </div>
            <div className="text-white">
              <div className="text-base  font-semibold pb-8">
                Engagement Models
              </div>
              <div>Staff Augmentation</div>
              <div>Seat Leasing</div>
              <div>Outsourcing</div>
              <div>Recruitment Process Outsourcing</div>
              <div>Build, Operate, Transfer</div>
            </div>
          </div>
          <div className="text-lg font-semibold text-white pb-4">
            Get in Touch
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-white items-center flex flex-row gap-8">
              <div>
                <img src="assets/Vector.png" alt="tele" />
              </div>
              <div>
                <div className="flex flex-col gap-y-4">
                  +63 917 509 7752 (The Philippines)
                </div>
                <div>+94 11 514 6699 (Sri Lanka)</div>
              </div>
            </div>
            <div className="text-white items-center flex flex-row gap-8">
              <div>
                <img src="assets/Emailvector.png" alt="tele" />
              </div>
              <div>
                <div className="flex flex-col gap-y-4">info@fbcapac.com</div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex flex-row gap-4 items-center">
                  <div className="w-6 h-6">
                    <img
                      src="assets/FacebookVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src="assets/TwitterVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src="assets/InstaVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src="assets/LinkedinVector.png"
                      alt="Facebook"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="text-white text-lg font-semibold py-4">
                Strategic Partner
              </div>
              <div>
                <img src="assets/SalesRainLogoFooter.png" alt="logo" />
              </div>
              <div className="py-4 bg-[#0C2E4E]">
                <hr className="text-white h-2 w-full" />
                <div className="flex mx-auto justify-center text-center text-sm font-light text-gray-400 pt-6 ">
                  Copyright @ FBC Asia Pacific Inc. 2023. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
