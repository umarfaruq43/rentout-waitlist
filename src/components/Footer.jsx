import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/img/AppLogo.svg";

const Footer = () => {
  return (
    <div className="bg-footer md:mt-20 mt-20 py-4 md:py-10 md:px-32">
      <div className="flex justify-between items-center text-center text-very_dim md:text-left md:flex-row flex-col md:text-xl md:text-primary font-bold">
        <div className="text-center md:text-left mt-5">
          <img src={Logo} alt="" className="w-40  md:w-40  mx-auto md:mx-0" />
          <div className="mt-4 md:text-xl text-very_dim md:text-primary">
            Lekki Phase 2, Lagos Nigeria
          </div>
        </div>

        <div className=" md:hidden my-4 text-center text-md md:text-xl text-primary md:text-right ">
          <a href="mailto:hey@rentout.app">hey@rentout.app</a>
        </div>

        <div className="mx-auto md:mx-0  md:mt-5 ">
          <div className="text-2xl text-very_dim md:text-orange flex justify-center md:justify-end mb-4">
            <a
              href="https://instagram.com/rentout.app?igshid=YmMyMTA2M2Y="
              className="footer_link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/RentOutng?t=uYUlrohQarKhLMiRVlD3HA&s=09"
              className="footer_link"
            >
              <FaTwitter />
            </a>

            <a href="#" className="footer_link">
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/rentoutapp/"
              className="footer_link"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="hidden md:block text-center text-md text-primary md:text-right ">
            <a href="mailto:hey@rentout.app">hey@rentout.app</a>
          </div>

          <div className=" md:text-right">
            <span> Copyright 2022 </span>
            <a href="#" className="inline-block    md:text-primary">
              rentout.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
