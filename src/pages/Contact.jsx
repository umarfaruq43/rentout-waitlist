import React from "react";
import Nav from "../components/Nav";
import smallBox from "../assets/img/smallCircle.png";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <div className="relative page_body min-h-screen ">
      {/* small boxx div  */}
      <img
        src={smallBox}
        alt="smallBox"
        className="hidden md:block absolute w-52 imgBg"
      />
      {/* small box div  */}

      <div className="">
        <div className="content">
          <div className="px-4">
            <Nav />
          </div>
          <div className="px-4">
            <ContactUs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
