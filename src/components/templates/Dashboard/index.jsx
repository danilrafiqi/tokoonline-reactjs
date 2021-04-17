import React from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Dashboard = (props) => {
  return (
    <div className="bg-white flex h-screen flex-row">
      <div className="py-4 px-12">
        <div className="py-4 bg-gray-2">Logo</div>
        <div className="mt-10">
          <div className="font-extrabold text-2xl mb-6">Categories</div>
          {Array.from(Array(6).keys()).map((i) => {
            return (
              <div key={i} className="my-4 font-light">
                programming
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-1 flex-col">
        {/* //#region Header  */}
        <div className="flex py-4 pr-8 flex-row justify-between">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search . . ."
              className="p-4 rounded-full bg-gray-2 border-none w-80 mr-4"
            />
            <button className="bg-gray-2 py-4 rounded-full w-14 hover:bg-gray-200 text-gray-600 flex items-center justify-center">
              <IoSearch />
            </button>
          </div>
          <div className="flex flex-row">
            <button className="bg-gray-2 py-4 rounded-full w-14 hover:bg-gray-200 text-gray-600 flex items-center justify-center">
              <IoCartOutline />
            </button>

            <button className="ml-4 bg-blue-600 py-4 rounded-full w-14 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center">
              oo
            </button>
          </div>
        </div>
        {/* //#endregion */}
        {props.children}
      </div>
    </div>
  );
};

export default Dashboard;
