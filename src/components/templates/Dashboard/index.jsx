import img from "@assets/img/index";
import { CircleButton } from "@components/atoms/index";
import React from "react";
import { IoCartOutline, IoPersonOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="bg-white container mx-auto 2xl:max-w-7xl">
      <div className="w-full flex flex-row justify-between">
        <div className="py-4 w-36 flex justify-center items-center mr-10">
          <Link to="/">
            <img src={img.logo} alt="" />
          </Link>
        </div>

        {/* //#region Header  */}
        <div className="flex py-4 flex-row justify-between flex-1">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search . . ."
              className="p-4 rounded-full bg-gray-2 border-none w-80 mr-4"
            />
            <CircleButton className="w-14 h-14">
              <IoSearch />
            </CircleButton>
          </div>
          <div className="flex flex-row">
            <CircleButton className="w-14 h-14 mr-2">
              <IoCartOutline />
            </CircleButton>
            <CircleButton className="w-14 h-14">
              <IoPersonOutline />
            </CircleButton>
          </div>
        </div>
        {/* //#endregion */}
      </div>
      {props.children}
    </div>
  );
};

export default Dashboard;
