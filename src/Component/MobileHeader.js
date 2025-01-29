import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <section
        className={`header_section_mobile ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mobile_header_col">
              <h2 className="logo">
                Rohit Sahani<span>.</span>
              </h2>
              <RiMenu3Line
                className="mobile_menu"
                onClick={() => {
                  setShowMenu(true);
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {showMenu && (
        <section className="menu_mobile">
          <div className="row">
            <div className="col-lg-12 mobile_ul">
              <ul>
                <li
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <a href="#hero">01. Home</a>
                </li>
                <li
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <a href="#about"> 02. About</a>
                </li>
                <li
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <a href="#resume">03. Resume</a>
                </li>
                <li
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <a href="#work"> 04. Work</a>
                </li>
                <li
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <a href="#contact"> 05. Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <RxCross1
            className="cross"
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </section>
      )}
    </>
  );
};

export default MobileHeader;
