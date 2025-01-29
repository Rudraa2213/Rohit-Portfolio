import React, { useState, useEffect } from "react";

const Header = () => {
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
  const [activeMenu, setActiveMenu] = useState(1);

  return (
    <>
      <section className={`header_section ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="logo">
                Rohit Sahani<span>.</span>
              </h2>
            </div>
            <div className="col-lg-6">
              <ul>
                <li className="">
                  <a
                    href="#hero"
                    className={`${activeMenu === 1 ? "active" : ""}`}
                    onClick={() => {
                      setActiveMenu(1);
                    }}
                  >
                    01. Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={`${activeMenu === 2 ? "active" : ""}`}
                    onClick={() => {
                      setActiveMenu(2);
                    }}
                  >
                    02. About
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className={`${activeMenu === 3 ? "active" : ""}`}
                    onClick={() => {
                      setActiveMenu(3);
                    }}
                  >
                    03. Resume
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className={`${activeMenu === 4 ? "active" : ""}`}
                    onClick={() => {
                      setActiveMenu(4);
                    }}
                  >
                    04. Work
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`${activeMenu === 5 ? "active" : ""}`}
                    onClick={() => {
                      setActiveMenu(5);
                    }}
                  >
                    05. Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 btn_col">
              <a href="#contact " className="header_button">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
