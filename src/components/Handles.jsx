import { useState } from "react";

const Handles = ({ formData, setFormData }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Social media handle
        </label>
        <input
          type="text"
          value={formData.socialMedia}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] `}
          placeholder="Enter name"
          onChange={(e) =>
            setFormData({ ...formData, socialMedia: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Instagram handle
        </label>
        <input
          type="text"
          value={formData.instagramHandle}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] 
         
        `}
          placeholder="Enter name"
          onChange={(e) =>
            setFormData({ ...formData, instagramHandle: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          TikTok Handle
        </label>
        <input
          type="text"
          value={formData.tiktokHandle}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] 
         
        `}
          placeholder="Enter name"
          onChange={(e) =>
            setFormData({ ...formData, tiktokHandle: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          what kind of creators have you work with in the past?
        </label>
        <select
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] 
         
        `}
          value={formData.creatorsWorkedWithPast}
          onChange={(e) =>
            setFormData({ ...formData, creatorsWorkedWithPast: e.target.value })
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
    </div>
  );
};

export default Handles;
