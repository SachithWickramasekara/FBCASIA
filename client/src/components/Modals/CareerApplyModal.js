import { Modal, Progress } from "antd";
import React, { useState } from "react";
import { checkboxData } from "../../constants/CareerData";

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
        <form className="p-5 flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
            <div className="flex flex-col w-full gap-2">
              <span>First Name</span>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
            <div className="flex flex-col  w-full gap-2">
              <span>Middle Name</span>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
            <div className="flex flex-col  w-full gap-2">
              <span>Surname</span>
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Address</span>
            <input
              type="text"
              placeholder="Address"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
            <span>Address Line 2</span>
            <input
              type="text"
              placeholder="Address"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
            <div className="flex flex-row gap-6 w-full">
              <div className="w-full flex flex-col gap-2">
                <span>City</span>
                <input
                  type="text"
                  placeholder="City"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <span>State /Province /Region</span>
                <input
                  type="text"
                  placeholder="State /Province /Region"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 w-full ">
            <div className="w-full flex flex-col gap-2 ">
              <span>Zip /Postal Code</span>
              <input
                type="text"
                placeholder="Zip /Postal Code"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <span>Country</span>
              <input
                type="text"
                placeholder="State /Province /Region"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-1/2  pr-4 flex flex-col gap-2">
              <span>Phone Number</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
            <div className="w-1/2  pr-4 flex flex-col gap-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Phone Number"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
            <div className="w-1/2  pr-4 flex flex-col gap-2">
              <span>Skype Address</span>
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Next of Kin</span>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <span>Relationship</span>
                  <input
                    type="text"
                    placeholder="Relationship"
                    className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <span>Contact Details</span>
                  <input
                    type="text"
                    placeholder="Contact Details"
                    className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
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
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Are you available to work full time?</span>
            <div className="flex flex-row gap-2">
              <input type="radio" name="full-time" value="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex flex-row gap-2">
              <input type="radio" name="full-time" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>What work shift are you able to work for?*</span>
            <select className="border border-[#46425580] rounded-md w-1/2 py-2 px-4 outline-none">
              <option value="volvo">USA - Night Shift</option>
              <option value="saab">UK - Mid Shift</option>
              <option value="mercedes">Australia - Day Shift</option>
              <option value="audi">Flexible Hours</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span>Are you currently employed or was previously employed?*</span>
            <div className="flex flex-row gap-2">
              <input type="radio" name="full-time" value="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex flex-row gap-2">
              <input type="radio" name="full-time" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>How long have you worked in BPO/Call Center Industry?</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>What markets have you served? (USA, UK, Australia etc)</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>Inbound or Outbound?</span>
            <select className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none">
              <option value="volvo">Inbound</option>
              <option value="saab">Outbound</option>
            </select>
          </div>
          <div>
            <span>What Channels are your familiar with?</span>
            {checkboxData.map((data, i) => (
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="terms" value="terms" id={i.id} />
                <label htmlFor="terms" className="font-light">
                  {data.name}
                </label>
              </div>
            ))}
            <span>
              Tick the boxes that applicable only from your job experience.
            </span>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>What language do you speak?</span>
            <select className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none">
              <option value="volvo">English</option>
              <option value="saab">Multi-lingual</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>What languages are you fluent with apart from English?</span>
            <input
              type="text"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>Current Salary in Pesos</span>
            <input
              type="number"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <span>Expected Salary in Pesos</span>
            <input
              type="number"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>OOKLA speed test results</span>
            <input type="file" className="" onChange={handleFileChange} />
            <span className="font-light">
              Accepted file types: pdf, doc, rtf, jpg, jpeg, Max. file size: 15
              MB.
            </span>
            <span className="font-light">
              Please use{" "}
              <a
                href="https://www.speedtest.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF731D]"
              >
                https://www.speedtest.net
              </a>{" "}
              to run a bandwidth test and share a screenshot of the results.
            </span>
          </div>
          <span className="">Internet Service Provider Details</span>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                  placeholder="Service Provider?"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                  placeholder="Upload Speed"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  placeholder="Download Speed"
                  className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
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
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                      placeholder="Processor i5 / i3 ?"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      placeholder="Memory ?"
                      className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none my-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Do you have dedicated space to work from home?</span>
            <div className="flex flex-row gap-2">
              <input type="radio" name="full-time" value="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex flex-row gap-2">
              <input type="radio" name="full-time" value="no" />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <span>Submit two referees and relevant contact details here</span>
          <div className="w-full flex flex-row gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
            />
            <input
              type="text"
              placeholder="Role"
              className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
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
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>
              Were you referred by an existing FBC employee? If yes, write their
              name and employee ID below.
            </span>
            <div className="w-full flex gap-2">
              <input
                type="text"
                placeholder="Name"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
              />
              <input
                type="text"
                placeholder="FBC Employee ID"
                className="border border-[#46425580] rounded-md w-full py-2 px-4 outline-none"
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
              <input type="checkbox" name="terms" value="terms" id="terms" />
              <label htmlFor="terms" className="font-light">
                I hereby agree that all the information submitted are accurate
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="submit"
              value="Submit"
              className="cursor-pointer border border-[#FF731D] text-[#FF731D;] py-1 text-base px-3 rounded-sm hover:bg-[#FF731D] hover:text-white transition-all duration-300 ease-in-out"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CareerApplyModal;
