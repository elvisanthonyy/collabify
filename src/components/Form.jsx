import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Header from "./Handles.jsx";
import Budget from "./Budget.jsx";
import tri from "../assets/yellow_tri.png";

const Form = ({ name }) => {
  const [formIndex, setFormIndex] = useState(0);
  // state management for inputs

  //ensure form doesn't move with and empty input
  const [error, setError] = useState(false);

  //const inputs = [brandName, email, whatsappNo, refCode];

  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    whatsappNo: "",
    refCode: "",
    socialMedia: "",
    instagramHandle: "",
    tiktokHandle: "",
    creatorsWorkedWithPast: "",
    creatorsWorkedWith: "",
    campaignBudget: "",
    minimumPayout: "",
  });

  // moving to the next input
  const handleNext = () => {
    if (formIndex === 0) {
      if (
        formData.brandName === "" ||
        formData.email === "" ||
        formData.whatsappNo === ""
      ) {
        setError("Please fill in all fields");
        return;
      } else {
        if (formData.email.includes("@") === false) {
          setError("Please enter a valid email");
          return;
        }
        formIndex < 3 && setFormIndex(formIndex + 1);
      }
    } else if (formIndex === 1) {
      if (
        formData.socialMedia === "" ||
        formData.instagramHandle === "" ||
        formData.tiktokHandle === "" ||
        formData.creatorsWorkedWithPast == ""
      ) {
        setError("Please fill in all fields");
        return;
      } else {
        formIndex < 3 && setFormIndex(formIndex + 1);
      }
    } else {
      if (
        formData.creatorsWorkedWith === "" ||
        formData.campaignBudget === "" ||
        formData.minimumPayout === ""
      ) {
        setError("Please fill in all fields");
        return;
      } else {
        formIndex < 3 && setFormIndex(formIndex + 1);
      }
    }

    setError(false);
  };

  const handleSubmit = () => {
    alert(`You're on the list ${formData.brandName}`);
  };

  const handleBack = () => {
    formIndex > 0 && setFormIndex(formIndex - 1);
    setError(false);
  };

  const pageDisplay = () => {
    if (formIndex == 0) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          setError={setError}
        />
      );
    } else if (formIndex == 1) {
      return <Header formData={formData} setFormData={setFormData} />;
    } else {
      return <Budget formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div>
      {formIndex === 3 && (
        <div className="absolute w-full h-full bg-black/2 z-8 backdrop-blur-xs"></div>
      )}
      <form className="flex flex-col  h-[75vh] md:w-[36%] w-full  items-center md:top-[50%] -bottom-4 left-[50%] fixed -translate-x-[50%] md:-translate-y-[45%] bg-white rounded-[24px] z-10">
        <div className="flex justify-between items-center w-[85%] mt-10">
          <div className="relative">
            <div className="flex justify-center items-center h-[48px] text-[24px] font-jarkata font-semibold tracking-tight w-[219px] bg-colabify-blue text-white rounded-[12px]">
              {`Join as ${name == "brand" ? "Brand" : "Creator"}`}
            </div>
            <img
              src={tri}
              alt="triangle"
              className="absolute top-[53px] left-10 h-[14px]"
            />
          </div>
          <div className="flex justify-center items-center h-[40px] w-[66px] text-collabify-label font-inter text-[14px] rounded-[16px] bg-colabify-grayInput ">{`${
            formIndex + 1
          } of 3`}</div>
        </div>

        <div className="flex w-[86%] h-[62%] mt-6">{pageDisplay()}</div>
        <div className="mb-3 font-inter text-[14px]">
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="w-[90%] flex">
          {formIndex > 0 && (
            <div
              className="flex justify-center items-center h-[56px] text-[16px] font-inter text-colabify-black w-[35%] mr-2 bg-colabify-backBtn rounded-[64px]  cursor-pointer hover:opacity-80"
              onClick={handleBack}
            >
              Back
            </div>
          )}

          {formIndex == 2 ? (
            <div
              className="flex justify-center items-center h-[56px] w-[100%] text-[16px] font-inter bg-colabify-black rounded-[64px] text-white cursor-pointer hover:opacity-80"
              onClick={handleSubmit}
            >
              {" "}
              Submit
            </div>
          ) : (
            <div
              className="flex justify-center items-center h-[56px] w-[100%] text-[16px] font-inter bg-colabify-black rounded-[64px] text-white cursor-pointer hover:opacity-80"
              onClick={handleNext}
            >
              {" "}
              Next
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
