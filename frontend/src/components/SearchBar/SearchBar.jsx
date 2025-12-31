import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { frontendAssets } from "../../const/frontendImagesAssets";
import { useLocation } from "react-router";

export const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center transition-all duration-300 ease-in-out">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img
          src={frontendAssets.search_icon}
          alt="Seach Icon"
          className="w-4"
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={frontendAssets.cross_icon}
        alt="Cross Icon"
        className="w-3 inline cursor-pointer"
      />
    </div>
  ) : null;
};
