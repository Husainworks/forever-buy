import React from "react";
import { Title } from "../../components/Title/Title";
import { frontendAssets } from "../../const/frontendImagesAssets";
import { Newsletter } from "../Home/Newsletter/Newsletter";

const Contact = () => {
  return (
    <div >
      <div className="text-center text-2xl pt-10 border-t">
        <Title title1={`Contact`} title2={`Us`} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={frontendAssets.contact_img}
          alt="Contact Image"
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 uppercase">
            Our Store
          </p>

          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>

          <div>
            <a href="tel:4155550123" className="text-gray-500 block">
              Tel: (415) 555-0123
            </a>
            <a href="mailto:admin@forever.com" className="text-gray-500">
              admin@forever.com
            </a>
          </div>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>

          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
