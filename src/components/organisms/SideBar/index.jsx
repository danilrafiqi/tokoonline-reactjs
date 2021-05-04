import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="rounded-md shadow py-4 bg-white mr-4 h-auto w-56 flex flex-col">
      <NavLink
        to="/user/me"
        className="my-1 py-4 font-light pl-4"
        activeClassName="bg-blue-600 text-white"
      >
        Profile
      </NavLink>
      <NavLink
        to="/order"
        className="my-1 py-4 font-light pl-4"
        activeClassName="bg-blue-600 text-white"
      >
        Order
      </NavLink>
      <NavLink
        to="/coupons"
        className="my-1 py-4 font-light pl-4"
        activeClassName="bg-blue-600 text-white"
      >
        Coupon
      </NavLink>
    </div>
  );
};

export default SideBar;
