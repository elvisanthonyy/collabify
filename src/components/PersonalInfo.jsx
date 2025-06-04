import { useState } from "react";

const PersonalInfo = ({ formData, setFormData, setError }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Brand Name
        </label>
        <input
          type="text"
          value={formData.brandName}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] `}
          placeholder="Enter Brandname "
          onChange={(e) => {
            setFormData({ ...formData, brandName: e.target.value });
            if (e.target.value === "") {
              setError("Please enter a brand name");
            } else {
              setError(false);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center mb-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Email
        </label>
        <input
          type="text"
          value={formData.email}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] 
         
        `}
          placeholder="Enter Email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (e.target.value.includes("@") === false) {
              setError("Please enter a valid email");
            } else {
              setError(false);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Whatsapp Number
        </label>
        <input
          type="text"
          value={formData.whatsappNo}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] `}
          placeholder="Enter WhatsApp no"
          onChange={(e) => {
            setFormData({ ...formData, whatsappNo: e.target.value });
            if (e.target.value === "") {
              setError("Please enter a whatsapp no");
            } else {
              setError(false);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Refferal Code
        </label>
        <input
          type="text"
          value={formData.refCode}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] `}
          placeholder="Enter Refferal Code"
          onChange={(e) =>
            setFormData({ ...formData, refCode: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
