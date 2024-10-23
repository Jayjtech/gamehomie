import React from "react";
import Hero from "../home/components/Hero";
import Category from "./components/Category";
import Casino from "./components/Casino";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "../../../assets/icons";
import { websiteSideBarArr } from "../../../utils/navs";

const Home = () => {
  return (
    <div className="bg-bg2">
      <div className="grid grid-cols-9">
        {/* Sidebar */}
        <div className="col-span-2 bg-bg1 mt-2 w-full rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <RiMenu3Line size={20} className="text-white" />
            <div className="flex justify-center items-center space-x-3">
              <Link className="btn-danger">Casino</Link>
              <Link className="btn-success">Sport</Link>
            </div>
          </div>

          {/* Navs */}
          <div className="border-b pb-5">
            <div className="bg-bg2 rounded-lg">
              <div className="flex flex-col justify-start ">
                {websiteSideBarArr.map((nav, index) => (
                  <Link
                    key={index}
                    to={nav.path}
                    className="flex justify-start items-center space-x-2 text-white px-6 py-3 hover:bg-bg1  transition-all ease-in-out duration-100">
                    <span>{nav.icon}</span>
                    <span>{nav.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End sidebar */}
        <div className="col-span-7">
          <Hero />
          <Category />
          {/* Display Casino games */}
          <Casino />
        </div>
      </div>
    </div>
  );
};

export default Home;
