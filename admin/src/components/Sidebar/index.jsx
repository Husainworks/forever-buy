import React from "react";
import { adminAssets } from "../../const/adminImagesAssets";
import { NavLink } from "react-router";

export const Sidebar = () => {
  return (
    <div className="w-[15%] min-h-[calc(100vh_-_var(--header-height))] border-r-2 border-gray-300">
      <div className="flex flex-col gap-4 pt-6 px-[20%] text-[15px] ">
        <NavLink
          className={`flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg`}
          to="/add-product"
        >
          <img className="w-5 h-5" src={adminAssets.add_icon} alt="Add Icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className={`flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg`}
          to="/list-items"
        >
          <img
            className="w-5 h-5"
            src={adminAssets.order_icon}
            alt="Order Icon"
          />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className={`flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg`}
          to="/all-orders"
        >
          <img
            className="w-5 h-5"
            src={adminAssets.order_icon}
            alt="Order Icon"
          />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};
