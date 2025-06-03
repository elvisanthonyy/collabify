import MainBackground from "../components/MainBackground.jsx";
import { useState } from "react";
import Header from "../components/Header.jsx";

const Creator = () => {
  //state for index of input to determine what will show next
  const [formIndex, setFormIndex] = useState(1);
  // state management for inputs
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [refCode, setRefCode] = useState("");

  //ensure form doesn't move with and empty input
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const inputs = [brandName, email, whatsappNo, refCode];

  // moving to the next input
  const handleNext = () => {
    if (inputs[formIndex - 1].length > 0) {
      formIndex < 3 && setFormIndex(formIndex + 1);
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }
  };

  const handleSubmit = () => {
    if (inputs[formIndex - 1].length > 0) {
    }
    {
      setIsInputEmpty(true);
    }
  };

  const handleBack = () => {
    formIndex > 1 && setFormIndex(formIndex - 1);
    setIsInputEmpty(false);
  };

  return (
    <div className="h-[110vh] w-full bg-colabify-back relative">
      <Header name="creator" />
      {formIndex === 3 && (
        <div className="absolute w-full h-full bg-black/2 z-8 backdrop-blur-xs"></div>
      )}
      <form className="flex flex-col h-[80vh] w-[38%]  items-center top-[50%] left-[50%] fixed -translate-x-[50%] -translate-y-[45%] bg-white rounded-[24px] z-10">
        <div className="flex justify-between items-center w-[80%] mt-10">
          <div className="flex justify-center items-center h-[48px] w-[219px]  bg-colabify-blue text-white rounded-[12px]">
            Join as Creator
          </div>
          <div className="flex justify-center items-center h-[40px] w-[66px] rounded-[16px] bg-colabify-grayInput ">{`${formIndex} of 3`}</div>
        </div>

        {formIndex === 1 && (
          <div>
            <label className="ml-10">Brand Name</label>
            <input
              type="text"
              value={brandName}
              className={`bg-colabify-grayInput p-2 outline-none h-[48px] w-[82%] mx-10 my-2 px-5 rounded-[12px] ${
                isInputEmpty ? "border-red-700 border-1" : "border-black"
              }`}
              placeholder="Enter Brandname "
              onChange={(e) => satBrandName(e.target.value)}
            />
            <label className="ml-10">Email</label>
            <input
              type="text"
              value={email}
              className={`bg-colabify-grayInput p-2 outline-none h-[48px] w-[82%] mx-10 my-2 px-5 rounded-[12px] ${
                isInputEmpty ? "border-red-700 border-1" : "border-black"
              }`}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="ml-10">WhatsApp NO</label>
            <input
              type="text"
              value={whatsappNo}
              className={`bg-colabify-grayInput p-2 outline-none h-[48px] w-[82%] mx-10 my-2 px-5 rounded-[12px] ${
                isInputEmpty ? "border-red-700 border-1" : "border-black"
              }`}
              placeholder="Enter WhatsApp no"
              onChange={(e) => setWhatsappNo(e.target.value)}
            />
            <label className="ml-10">Ref Code</label>
            <input
              type="text"
              value={refCode}
              className={`bg-colabify-grayInput p-2 outline-none h-[48px] w-[82%] mx-10 my-2 px-5 rounded-[12px] ${
                isInputEmpty ? "border-red-700 border-1" : "border-black"
              }`}
              placeholder="Enter Refferal Code"
              onChange={(e) => setRefCode(e.target.value)}
            />
          </div>
        )}

        {formIndex === 4 && (
          <div>
            {" "}
            {`Congratulations you're on the list ${firstName} ${lastName}`}{" "}
          </div>
        )}

        {formIndex === 3 ? (
          <div
            className="flex justify-center items-center h-10 w-[80%] bg-black rounded-3xl text-white cursor-pointer hover:opacity-80"
            onClick={handleSubmit}
          >
            Submit
          </div>
        ) : (
          <div
            className="flex justify-center items-center h-[56px] w-[82%] bg-colabify-black rounded-[64px] text-white cursor-pointer hover:opacity-80"
            onClick={handleNext}
          >
            Next
          </div>
        )}
      </form>
      <div>
        <MainBackground />
      </div>
    </div>
  );
};

export default Creator;
