import React from "react";
import header from "../assets/Header.png";
import { Link } from "react-router-dom";
import collab from "../assets/collab.png";
import home from "../assets/home.png";
import phone from "../assets/phone.png";
import cancel from "../assets/cancel.png";

const Header = ({ name }) => {
  return (
    <div>
      <div className="flex items-center justify-between fixed top-6 left-[50%] -translate-x-[50%] z-15">
        {name == "creator" || name == "brand" ? (
          <Link to={"/collabify/"}>
            <img src={home} className="ml-2"></img>
          </Link>
        ) : (
          ""
        )}
        <Link to={"/collabify/about"}>
          <img src={collab} className="ml-2"></img>
        </Link>
        {name == "home" || name == "creator" || name == "brand" ? (
          <img src={phone} className="ml-2"></img>
        ) : (
          ""
        )}
        {name == "about" && (
          <Link to={"/collabify/"}>
            <img src={cancel} className="ml-2"></img>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
