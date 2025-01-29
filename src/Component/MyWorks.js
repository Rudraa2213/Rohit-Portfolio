import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import college from '../assets/img/Collegelogo.png';
import Saet from "../assets/img/Saet.png";
import Real from "../assets/img/Real.png";
import Fake from '../assets/img/fake.png';
import HRMS from '../assets/img/hrms.png';
const MyWorks = () => {
  const webData = [
    {
      project_name: "Uniboxx Education",
      discription: "College Website  || React Js || Node Js ",
      link: "https://uniboxxeducationislive.netlify.app/",
      image: `${college}`
    },
    {
      project_name: "Digital Marketing",
      discription: "Marketing Website || HTML || CSS || Javascipt || SVG",
      link: "https://saetdigital.netlify.app/",
      image: `${Saet}`,
    },
    {
      project_name: "Real Estate",
      discription: "Real Estate Demo || React Js || PHP",
      link: "https://meraswabhimaan.com/",
      image: `${Real}`,
    },
    {
      project_name: "fake India",
      discription: "Fake E-shop || React js || Java || Rest API",
      link: "https://fakeindia.netlify.app/",
      image: `${Fake}`,
    },
    {
      project_name: "HRMS",
      discription: "It Service Project  || Frontend || Php",
      link: "https://hrmsislive.netlify.app/employeedash/dash",
      image: `${HRMS}`,
    }
  ];
 


  const [app, setApp] = useState(true);
  const [web, setWeb] = useState(true);
  const [wordpress, setWordpress] = useState(true);

  return (
    <>
      <section className="experience_section" id="work">
        <div className="container">
          <h2 className="about_main_heading">Projects</h2>

          <div className="row">
            <div className="col-lg-12">
              <div className="work_main_div">
                <a href="/"
                  className="work_btn"
                  onClick={() => {
                    setApp(true);
                    setWeb(true);
                    setWordpress(true);
                  }}
                >
                  All
                </a>
                <a href="/"
                  className="work_btn"
                  onClick={() => {
                    setWeb(true);
                    setApp(false);
                    setWordpress(false);
                  }}
                >
                  Web
                </a>
                <a href="/"
                  className="work_btn"
                  onClick={() => {
                    setApp(true);
                    setWeb(false);
                    setWordpress(false);
                  }}
                >
                  App
                </a>
                <a href="/"
                  className="work_btn"
                  onClick={() => {
                    setApp(false);
                    setWeb(false);
                    setWordpress(true);
                  }}
                >
                  Wordpress
                </a>
              </div>
            </div>
          </div>

          {web && (
            <div className="row mt-3">
              {webData?.map((item, index) => {
                return (
                  <div className="col-lg-4 mt-3">
                    <div className="project_div">
                      <div>
                        <img src={`${item.image}`} className="project-image" alt="something gone"/>
                      </div>
                      <div className="img_absolute">
                        <FaLink
                          className="link_icon"
                          onClick={() => {
                            window.open(item.link);
                          }}
                        />
                      </div>

                      <h2>{item.project_name}</h2>
                      <p>{item.discription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {app && (
            <div className="row mt-3">
             
            </div>
          )}
          {wordpress && (
            <div className="row mt-3">
            
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyWorks;
