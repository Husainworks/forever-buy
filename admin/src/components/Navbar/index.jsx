import React from "react";
import { adminAssets } from "../../const/adminImagesAssets";
import { Link } from "react-router";

export const Navbar = ({ setToken }) => {
  return (
    <div className="sticky top-0 bg-gray-50 z-20">
      <div className="flex items-center justify-between py-2 px-[4%]">
        <Link className="w-[max(10%,80px)]" to="/add-product">
          <img src={adminAssets.logo} alt="Forever Buy Admin Logo" />
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("admin-token");
            setToken("");
          }}
          className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer"
        >
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};
