import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import { useState } from "react";

const Creator = () => {
  return (
    <div className="h-[100dvh] w-full bg-colabify-back relative">
      <Header name="creator" />
      <Background />
      <Form name="creator" />
    </div>
  );
};

export default Creator;
