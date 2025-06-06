import React from "react";

const Budget = ({ formData, setFormData, setError }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          What types of creators have you worked with?
        </label>
        <select
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 mt-2 px-3 rounded-[12px] 
         
        `}
          value={formData.creatorsWorkedWith}
          onChange={(e) =>
            setFormData({ ...formData, creatorsWorkedWith: e.target.value })
          }
        >
          <option value="" disabled defaultValue>
            Select your country
          </option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          what’s your brand campaign budget
        </label>
        <select
          className={`bg-colabify-grayInput  p-2 outline-none h-[48px] text-[14px] text-colabify-black w-full mx-10 mt-2 px-3 rounded-[12px] 
         
        `}
          value={formData.campaignBudget}
          onChange={(e) =>
            setFormData({ ...formData, campaignBudget: e.target.value })
          }
        >
          <option value="" disabled defaultValue>
            Select your country
          </option>
          <option value="N50,000-N100,000">N50,000-N100,000</option>
          <option value="N100,000-N500,000">N100,000-N500,000</option>
          <option value="N500,000-N1m+">N500,000-N1m+</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Minimum payout per 1,000 views (₦)?
        </label>
        <input
          type="text"
          value={formData.minimumPayout}
          className={`bg-colabify-grayInput p-2 outline-none h-[48px] text-[14px] text-colabify-black min-w-full mx-10 mt-2 px-3 rounded-[12px] `}
          placeholder="Enter amount"
          onChange={(e) =>
            setFormData({ ...formData, minimumPayout: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Budget;
