import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const [showValidationName, setShowValidataionName] = useState(false);
  const [showValidationEmail, setShowValidataionEmail] = useState(false);
  const [showValidationPhone, setShowValidataionPhone] = useState(false);

  const sendEnquiry = () => {


    toast.success("Thankyou for contacting me !");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    try {
      axios.post(`http://192.168.0.105:5000/contact`, {
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then((res) => {
          toast.success(res.data.message);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );
  const phoneRegex = /^\d{10}$/;
  return (
    <>
      <section className="experience_section" id="contact">
        <div className="container">
          <h2 className="about_main_heading">Contact Us</h2>
          <div className="row">
            <div className="col-lg-5">
              <h2 className="contact_information">Contact Information</h2>
              <p className="contact_information_para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry , when an unknown printer took.
              </p>

              <div className="contact_form_div contact_flex_div mt-4">
                <div>
                  <div className="contact_phone">
                    <FiPhoneCall />
                  </div>
                </div>
                <div className="contact_content">
                  <h3>Contact on phone</h3>
                  <p
                    onClick={() => {
                      window.location.href = "tel:6393799570";
                    }}
                  >
                    +91 6393799570
                  </p>
                </div>
              </div>
              <div className="contact_form_div contact_flex_div mt-4">
                <div>
                  <div className="contact_phone">
                    <MdOutlineEmail />
                  </div>
                </div>
                <div className="contact_content">
                  <h3>Contact on email</h3>
                  <p
                    onClick={() => {
                      window.location.href = "mailto:rohitsir1999@gmaiil.com";
                    }}
                  >
                    rohitsir1999@gmaiil.com
                  </p>
                </div>
              </div>
              <div className="contact_form_div contact_flex_div mt-4">
                <div>
                  <div className="contact_phone">
                    <SlLocationPin />
                  </div>
                </div>
                <div className="contact_content">
                  <h3>Address</h3>
                  <p>Nand-Nagri Shahadra Delhi, 110093</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 contact_col">
              <div className="contact_form_div">
                <div>
                  <lable className="form_lable">Name</lable>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className={`input_field ${showValidationName ? "validation" : ""
                      }`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onClick={() => setShowValidataionName(false)}
                  />
                  {showValidationName && (
                    <span className="validation_span">Enter the name*</span>
                  )}
                </div>
                <div>
                  <lable className="form_lable">Email</lable>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className={`input_field ${showValidationEmail ? "validation" : ""
                      }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={() => setShowValidataionEmail(false)}
                  />
                  {showValidationEmail && (
                    <span className="validation_span">Enter the email*</span>
                  )}
                </div>
                <div>
                  <lable className="form_lable">Phone</lable>
                  <input
                    type="phone"
                    placeholder="Enter your phone..."
                    className={`input_field ${showValidationPhone ? "validation" : ""
                      }`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onClick={() => setShowValidataionPhone(false)}
                  />
                  {showValidationPhone && (
                    <span className="validation_span">Enter the phone*</span>
                  )}
                </div>
                <div>
                  <lable className="form_lable">Message</lable>
                  <textarea
                    placeholder="Enter your message..."
                    class="input_field form_message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <input
                    type="Submit"
                    value="Submit"
                    className="form_btn"
                    onClick={() => {
                      if (!name) {
                        setShowValidataionName(true);
                        setShowValidataionEmail(false);
                        setShowValidataionPhone(false);
                      } else if (!email) {
                        setShowValidataionEmail(true);
                        setShowValidataionName(false);
                        setShowValidataionPhone(false);
                      } else if (!emailRegex.test(email)) {
                        toast.warning("invalid email");
                      } else if (!phone) {
                        setShowValidataionPhone(true);
                        setShowValidataionName(false);
                        setShowValidataionEmail(false);
                      } else if (!phoneRegex.test(phone)) {
                        toast.warning("invalid phone");
                      } else {
                        sendEnquiry();
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        draggable />
    </>
  );
};

export default Contact;
