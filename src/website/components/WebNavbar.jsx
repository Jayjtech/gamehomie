import React from "react";
import { logo } from "../../assets/images";
import { websiteNavArr } from "../../utils/navs";
import { Link } from "react-router-dom";

const WebNavbar = () => {
  return (
    <div className="bg-bg1 px-8 py-2 shadow-lg">
      {/* Desktop Navbar */}
      <div className="md:flex justify-between items-center gap-5">
        <span>
          <img src={logo} alt="" className="w-18 h-12" />
        </span>
        <div className="md:flex justify-between items-center space-x-3">
          {websiteNavArr.map((nav, index) => (
            <Link
              to="/"
              key={index}
              className="nav-link flex justify-center items-center p-3 space-x-2">
              <span className="">{nav.icon}</span>
              <span>{nav.title}</span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="md:flex justify-between items-center gap-5">
          <button className="btn-transparent">Login</button>
          <button className="btn-success">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
