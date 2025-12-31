import React, { useContext, useState } from "react";
import { frontendAssets } from "../../const/frontendImagesAssets";
import { Link, NavLink } from "react-router";
import { ShopContext } from "../../context/ShopContext";

export const Navbar = () => {
  const {
    showSearch,
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    if (!token) {
      navigate("/login");
    } else {
      setShowDropdown((prev) => !prev); // Toggle dropdown
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="sticky z-10 top-0 bg-white flex items-center justify-between py-5 font-medium">
      <Link to={`/`}>
        <img
          src={frontendAssets.logo}
          className="w-36"
          alt="Forever Buy Logo"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className="nav-link group flex flex-col items-center gap-1"
        >
          <p className="uppercase">Home</p>

          <hr className="w-full h-0.5 border-none bg-gray-700 group-hover:hidden hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className="nav-link group flex flex-col items-center gap-1"
        >
          <p className="uppercase">Collection</p>

          <hr className="w-full h-0.5 border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className="nav-link group flex flex-col items-center gap-1"
        >
          <p className="uppercase">About</p>

          <hr className="w-full h-0.5 border-none  bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-link group flex flex-col items-center gap-1"
        >
          <p className="uppercase">Contact</p>

          <hr className="w-full h-0.5 border-none  bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={frontendAssets.search_icon}
          alt="Search Icon"
          className="w-5 cursor-pointer"
        />

        <div className="relative">
          <img
            onClick={handleIconClick}
            src={frontendAssets.profile_icon}
            alt="Profile Icon"
            className="w-5 cursor-pointer"
          />

          {/* Dropdown menu */}
          {token && showDropdown && (
            <div className="absolute right-0 mt-2 bg-slate-100 text-gray-500 rounded py-3 px-5 w-36 shadow z-10">
              <div className="flex flex-col gap-2">
                <p
                  onClick={() => {
                    navigate("/orders");
                    setShowDropdown(false);
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img
            src={frontendAssets.cart_icon}
            alt="Cart Icon"
            className="w-5 min-w-5"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={frontendAssets.menu_icon}
          alt="Hamburger Menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Sidebar Menu for responsiveness */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              className="h-4 rotate-180"
              src={frontendAssets.dropdown_icon}
              alt="Dropdown Icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            className="py-2 pl-6 border-y nav-link-hamburger"
            onClick={() => setVisible(false)}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b nav-link-hamburger"
            onClick={() => setVisible(false)}
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b nav-link-hamburger"
            onClick={() => setVisible(false)}
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className="py-2 pl-6 border-b nav-link-hamburger"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};
