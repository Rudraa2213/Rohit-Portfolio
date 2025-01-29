import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
const SocialIcons = () => {
  return (
    <>
      <div className="social_icons fade-in-up">
        <FaGithub
          className="social-icon"
          onClick={() => {
            window.open("https://github.com/Rudraa2213");
          }}
        />
        <FaLinkedinIn
          className="social-icon"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/rohit-sahani-aa2ab11ba/"
            );
          }}
        />
        <FaFacebookF
          className="social-icon"
          onClick={() => {
            window.open("https://www.facebook.com/Rohitsir.sahani.9279");
          }}
        />
        <FaPhoneAlt
          gram
          className="social-icon"
          onClick={() => {
            window.location.href = "tel:+916393799570";
          }}
        />
        <FaWhatsapp
          className="social-icon"
          onClick={() => {
            window.open("https://wa.me/916393799570");
          }}
        />
      </div>
    </>
  );
};

export default SocialIcons;
