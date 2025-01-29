import React from "react";
import myImage from "../assets/img/Rudraa.jpg";
import myPDF from "../assets/files/Rudraa CV.pdf";

const About = () => {
  return (
    <>
      <section className="about_section" id="about">
        <div className="container">
          <div className="row">
            <h2 className="about_main_heading">About Us</h2>

            <div className="col-lg-6">
              <img src={myImage} className="about_img" alt="mera foto"/>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <ul>
                  <li>
                    <span>First Name </span> : Rohit
                  </li>
                  <li>
                    <span>Last Name</span> : Sahani
                  </li>
                  <li>
                    <span>Email</span> : rohitsir1999@gmail.com
                  </li>
                  <li>
                    <span>Phone</span> : +91 6393799570
                  </li>
                  <li>
                    <span>Dob</span> : 07 August 2001
                  </li>
                  <li>
                    <span>Nationality</span> : Indian
                  </li>
                  <li>
                    <span>Language</span> : Hindi English
                  </li>
                  <li>
                    <span>Address </span> : Nand Nagri Delhi 110093
                  </li>
                </ul>
                <a href={myPDF} download={`${myPDF}`} className="header_button about_btn mt-4">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
