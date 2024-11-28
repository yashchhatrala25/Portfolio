import React from "react";
import Image from "../assets/man.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="left flex items-center box-container h-screen">
      <div className="image flex justify-center items-center box-container">
        <div className="inner-area">
          <img className="w-full h-full" src={Image} alt="man" />
        </div>
      </div>
      <div className="menu w-full">
        <div className="social-icons">
          <Link to="tel:+918905908070" className="phone">
            <i className="fa-solid fa-phone">
              <span className="font-10 black ml-5"> +91-89059 08070</span>
            </i>
          </Link>
          <Link
            to="https://www.instagram.com/yash.chhatrala/"
            target="_blank"
            className="insta"
          >
            <i className="fab fa-instagram">
              <span className="font-10 black ml-5"> @yash.chhatrala</span>
            </i>
          </Link>
          <Link to="#" className="yt">
            <i className="fab fa-youtube">
              <span className="font-10 black ml-5"> codewithyash</span>
            </i>
          </Link>
          <Link to="mailto:yashkansara0425@gmail.com" className="email">
            <i className="fa-regular fa-envelope">
              <span className="font-10 black ml-5">
                {" "}
                yashkansara0425@gmail.com
              </span>
            </i>
          </Link>
          <Link
            to="https://github.com/yash2500"
            target="_blank"
            className="github"
          >
            <i className="fa-brands fa-github">
              <span className="font-10 black ml-5"> github.com/yash2500</span>
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
