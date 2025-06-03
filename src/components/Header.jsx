import React from "react";
import header from "../assets/Header.png";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
  return (
    <div>
      <Link to={`/collabify/${name == "home" ? "about" : ""}`}>
        <img
          src={header}
          alt="header"
          className="flex items-center justify-between fixed top-6 left-[50%] -translate-x-[50%] z-15"
        ></img>
      </Link>
    </div>
  );
};

export default Header;
