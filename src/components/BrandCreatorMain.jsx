import { useState } from "react";
import PersonalInfo from "./PersonalInfo.jsx";
import Handles from "./Handles.jsx";
import CreatorHandles from "./CreatorHandle.jsx";
import Budget from "./Budget.jsx";
import tri from "../assets/yellow_tri.png";
import starField from "../assets/star_field.png";
import Header from "./Header.jsx";
import cancel from "../assets/cancel.svg";
import { Link, useNavigate } from "react-router-dom";
import Copy from "./Copy.jsx";

const Form = ({ name }) => {
  const navigate = useNavigate();
  const [formIndex, setFormIndex] = useState(0);
  // state management for inputs

  //ensure form doesn't move with and empty input
  const [error, setError] = useState(false);

  //const inputs = [brandName, email, whatsappNo, refCode];

  const maxIndex = name === "brand" ? 2 : 1;
  // state for form data

  const [submitted, setSubmitted] = useState(false);
  // state for form data
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    whatsappNo: "",
    refCode: "",
    socialMedia: "",
    instagramHandle: "",
    tiktokHandle: "",
    youtubeLink: "",
    promotionAccepted: "",
    creatorsWorkedWithPast: "",
    creatorsWorkedWith: "",
    campaignBudget: "",
    minimumPayout: "",
  });

  //validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Email is valid
      return true;
    } else {
      // Email is invalid
      return false;
    }
  }

  function checkField(fieldValue, fieldName) {
    if (fieldValue === "") {
      setError(`Please enter ${fieldName}`);
    } else {
      setError(false);
    }
  }
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
        if (validateEmail(formData.email) === false) {
          setError("Please enter a valid email");
          return;
        } else {
          formIndex < maxIndex && setFormIndex(formIndex + 1);
        }
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
        formIndex < maxIndex && setFormIndex(formIndex + 1);
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
        formIndex < maxIndex && setFormIndex(formIndex + 1);
      }
    }

    setError(false);
  };

  const handleSubmit = () => {
    if (maxIndex == 2) {
      if (
        formData.brandName === "" ||
        formData.email === "" ||
        formData.whatsappNo === "" ||
        formData.socialMedia === "" ||
        formData.instagramHandle === "" ||
        formData.tiktokHandle === "" ||
        formData.creatorsWorkedWithPast == "" ||
        formData.creatorsWorkedWith === "" ||
        formData.campaignBudget === "" ||
        formData.minimumPayout === ""
      ) {
        setError("Please fill in all fields");
      } else {
        setError(false);
        setSubmitted(true);
        setTimeout(() => {
          navigate("/collabify/");
        }, 2000);
        // Here you can handle the form submission, e.g., send data to an API
        console.log("Form submitted", formData);
      }
    } else {
      if (
        formData.brandName === "" ||
        formData.email === "" ||
        formData.whatsappNo === "" ||
        formData.instagramHandle === "" ||
        formData.tiktokHandle === "" ||
        formData.youtubeLink === "" ||
        formData.promotionAccepted === ""
      ) {
        setError("Please fill in all fields");
      } else {
        setError(false);
        setSubmitted(true);
        setTimeout(() => {
          navigate("/collabify/");
        }, 2000);
        // Here you can handle the form submission, e.g., send data to an API
        console.log("Form submitted", formData);
      }
    }
  };

  const handleBack = () => {
    formIndex > 0 && setFormIndex(formIndex - 1);
    setError(false);
  };

  // hadling part of form to be displayed based on formIndex
  const pageDisplay = () => {
    if (formIndex == 0) {
      return (
        <PersonalInfo
          checkField={checkField}
          validateEmail={validateEmail}
          formData={formData}
          setFormData={setFormData}
          setError={setError}
        />
      );
    } else if (formIndex == 1) {
      if (name === "creator") {
        return (
          <CreatorHandles
            checkField={checkField}
            formData={formData}
            setFormData={setFormData}
            setError={setError}
          />
        );
      } else {
        return (
          <Handles
            checkField={checkField}
            formData={formData}
            setFormData={setFormData}
            setError={setError}
          />
        );
      }
    } else {
      return (
        <Budget
          checkField={checkField}
          formData={formData}
          setFormData={setFormData}
          setError={setError}
        />
      );
    }
  };
  return (
    <div>
      {!submitted && <Header name="creator" />}
      {submitted && <Copy />}
      {formIndex === maxIndex && (
        <div className="absolute w-full h-full bg-black/2 z-8 backdrop-blur-xs z-15"></div>
      )}
      {submitted && (
        <div className="fixed -rotate-1 flex flex-col justify-center items-center h-[77vh] md:h-[60vh] md:w-[27%] w-[82%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[45%] bg-white rounded-[24px] p-6 z-20">
          <Link to={"/collabify/"}>
            <div className=" flex justify-center cursor-pointer absolute top-5 right-5 rounded-[50%] border-black items-center h-[40px] w-[40px] bg-black/20  mx-2 z-10">
              <img src={cancel} alt="cancel" className="text-red-200"></img>
            </div>
          </Link>
          <img
            src={starField}
            alt="Star Field"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <h2 className="text-center font-bold text-[20px] font-inter text-colabify-black mb-4">
            You're on the list!
          </h2>
          <p className="text-center w-[85%] text-colabify-label font-inter text-[16px]">
            We've saved your spot. Keep an eye on your email -- If selected for
            early access you'll be first onboard and earn with collabify
          </p>
        </div>
      )}
      <form
        className={`flex flex-col ${
          submitted ? "hidden" : "fixed"
        } h-[80vh] md:h-[85vh] md:w-[60%] lg:h-[630px] lg:w-[612px] w-full  items-center md:top-[50%] -bottom-4 left-[50%] -translate-x-[50%] md:-translate-y-[45%] bg-white rounded-[24px] z-16`}
      >
        <div className="flex justify-between items-center w-[85%] mt-10">
          <div className="relative">
            <div className="flex justify-center items-center md:h-[48px] h-[40px] text-[16px] md:text-[24px] font-jarkata font-[500] tracking-tight md:w-[219px] w-[148px] bg-colabify-blue text-white rounded-[12px]">
              {`Join as ${name == "brand" ? "Brand" : "Creator"}`}
            </div>
            <img
              src={tri}
              alt="triangle"
              className="absolute md:top-[53px] top-[44px] md:left-10 left-8 md:h-[14px] h-[12px] "
            />
          </div>
          <div className="flex justify-center items-center h-[40px] w-[66px] text-collabify-label font-inter text-[14px] rounded-[16px] bg-colabify-grayInput ">{`${
            formIndex + 1
          } of ${maxIndex + 1}`}</div>
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

          {formIndex == maxIndex ? (
            <div
              className="flex justify-center items-center h-[56px] w-[100%] text-[16px] font-inter bg-colabify-black rounded-[64px] text-white cursor-pointer hover:opacity-80"
              onClick={handleSubmit}
            >
              {" "}
              Join waitlist
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
