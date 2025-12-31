import React from "react";
import { frontendAssets } from "../../const/frontendImagesAssets";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            className="mb-5 w-32"
            src={frontendAssets.logo}
            alt="Forever Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="uppercase font-semibold text-xl mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-lg">
              <Link to="/orders">Delivery</Link>
            </li>
            <li className="text-lg">
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">get in touch</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="text-gray-600 text-lg" to="tel:+12124567890">
                +1-212-456-7890
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 text-lg"
                to="mailto:contact@foreveryou.com"
              >
                contact@foreveryou.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
