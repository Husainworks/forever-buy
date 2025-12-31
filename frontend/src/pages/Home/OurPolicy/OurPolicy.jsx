import React from "react";
import { frontendAssets } from "../../../const/frontendImagesAssets";

export const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={frontendAssets.exchange_icon}
          alt="Exchange Icon"
        />
        <p className="font-semibold">Easy Exchnage Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={frontendAssets.quality_icon}
          alt="Exchange Icon"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy </p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={frontendAssets.support_img}
          alt="Exchange Icon"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};
