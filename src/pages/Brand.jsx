import MainBackground from "../components/MainBackground.jsx";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";

const Brand = () => {
  //state for index of input to determine what will show next

  return (
    <div className="h-[100dvh] w-full bg-colabify-back relative">
      <Header name="brand" />
      <Form name="brand" />
      {/* Background component */}
      <MainBackground />
    </div>
  );
};

export default Brand;
