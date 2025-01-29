import React from "react";
import SocialIcons from "../helpers/SocialIcons";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SocialIcons />
            </div>
            <div className="col-lg-6 copyright_div">
              <p className="footer_para">
                © 2024, All right reserved <span>Rohit Sahani</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
