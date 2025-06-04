import Background from "../components/Background.jsx";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import { useState } from "react";

const Creator = () => {
  return (
    <div className="h-[100vh] w-full bg-colabify-back relative">
      <Header name="creator" />
      <Background />
      <Form />
    </div>
  );
};

export default Creator;
