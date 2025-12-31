import React from "react";
import { Title } from "../../components/Title/Title";
import { frontendAssets } from "../../const/frontendImagesAssets";
import { Newsletter } from "../Home/Newsletter/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title title1={`about`} title2={`us`} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={frontendAssets.about_img}
          alt="About Image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title title1={`why`} title2={`choose us`} />
      </div>

      <div className="flex flex-col gap-2.5 md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-14 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance: </b>
          <p className="capitalize text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-14 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience: </b>
          <p className="capitalize text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-14 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service: </b>
          <p className="capitalize text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;
