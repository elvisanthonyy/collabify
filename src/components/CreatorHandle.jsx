import React from "react";

const CreatorHandle = ({ formData, setFormData, checkField }) => {
  return (
    <div className="w-full">
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
          onChange={(e) => {
            setFormData({
              ...formData,
              instagramHandle: e.target.value,
            });
            checkField(e.target.value, "an instagram handle");
          }}
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
          onChange={(e) => {
            setFormData({
              ...formData,
              tiktokHandle: e.target.value,
            });
            checkField(e.target.value, "a tiktok handle");
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          Youtube Link
        </label>
        <input
          type="text"
          value={formData.youtubeLink}
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] `}
          placeholder="Enter link"
          onChange={(e) => {
            setFormData({
              ...formData,
              youtubeLink: e.target.value,
            });
            checkField(e.target.value, "a tiktok handle");
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <label className="mr-auto text-[14px] text-colabify-label font-inter">
          what kind of promotions do you accept?
        </label>
        <select
          className={`bg-colabify-grayInput p-2 outline-none text-[14px] text-colabify-black h-[48px] w-full mx-10 my-2 px-3 rounded-[12px] 
         
        `}
          value={formData.promotionAccepted}
          onChange={(e) => {
            setFormData({
              ...formData,
              promotionAccepted: e.target.value,
            });
            checkField(e.target.value, "promotion accepted");
          }}
        >
          <option value="" disabled defaultValue>
            choose an option
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

export default CreatorHandle;
