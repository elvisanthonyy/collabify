import React from "react";
import header from "../assets/Header.png";
import { Link } from "react-router-dom";
import collab from "../assets/collabify_icon.svg";
import home from "../assets/home.svg";
import phone from "../assets/phone.svg";
import cancel from "../assets/cancel.svg";

const Header = ({ name }) => {
  return (
    <div>
      <div className="flex items-center justify-between md:justify-center w-[85%] fixed top-8 left-[50%] -translate-x-[50%] z-16">
        {name == "creator" || name == "brand" ? (
          <Link to={"/collabify/"}>
            <div className=" flex justify-center items-center h-[40px] w-[40px] bg-white/8 rounded-full md:ml-2 md:mr-2 ml-2 backdrop-blur-[8px]">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.08848 3.76364L4.08847 4.54453C2.57182 5.72887 1.81348 6.32105 1.40674 7.15601C1 7.99097 1 8.95552 1 10.8846V12.9767C1 16.763 1 18.6562 2.17157 19.8325C3.11466 20.7793 4.52043 20.964 7 21V17.0057C7 16.0738 7 15.6078 7.15224 15.2403C7.35523 14.7502 7.74458 14.3609 8.2346 14.1579C8.6022 14.0057 9.0681 14.0057 10 14.0057C10.9319 14.0057 11.3978 14.0057 11.7654 14.1579C12.2554 14.3609 12.6448 14.7502 12.8478 15.2403C13 15.6078 13 16.0738 13 17.0057V21C15.4796 20.964 16.8853 20.7793 17.8284 19.8325C19 18.6562 19 16.763 19 12.9767V10.8846C19 8.95552 19 7.99097 18.5933 7.15601C18.1865 6.32105 17.4282 5.72887 15.9115 4.54453L14.9115 3.76364C12.5521 1.92121 11.3724 1 10 1C8.6276 1 7.44787 1.92121 5.08848 3.76364Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ) : (
          ""
        )}
        <Link to={"/collabify/about"}>
          <div className="flex justify-center items-center h-[40px] w-[143px] bg-white/8 rounded-3xl mx-2 backdrop-blur-[8px]">
            <img src={collab} alt="collab"></img>
          </div>
        </Link>
        {name == "home" || name == "creator" || name == "brand" ? (
          <div className="h-[40px] w-[40px] bg-white/8 rounded-full mx-2 flex justify-center items-center hover:w-30 transition-[width] duration-400 ease-in-out">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 13V10.5C16 8.29086 14.2091 6.5 12 6.5C9.79086 6.5 8 8.29086 8 10.5V13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 11V10.5C13.5 9.67157 12.8284 9 12 9C11.1716 9 10.5 9.67157 10.5 10.5V14M13.5 13.5V15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19V19.01"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        {name == "about" && (
          <Link to={"/collabify/"}>
            <div className=" flex justify-center items-center h-[40px] w-[40px] bg-white/8 rounded-full mx-2">
              <img src={cancel} alt="cancel" className="text-red-200"></img>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
