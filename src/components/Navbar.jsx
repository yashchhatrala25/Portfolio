import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div className='container'>
    <div className="right-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
