import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MySkills = () => {
  const skillData = [
    {
      language: "React Js",
      percent: 90,
    },
    {
      language: "Express Js",
      percent: 60,
    },
    {
      language: "Redux",
      percent: 80,
    },
    {
      language: "Javascript",
      percent: 85,
    },
    {
      language: "Jquery",
      percent: 80,
    },
    {
      language: "Html",
      percent: 95,
    },
    {
      language: "Css",
      percent: 95,
    },
    {
      language: "Bootstrap",
      percent: 95,
    },
    {
      language: "Mysql Database",
      percent: 90,
    },
    {
      language: "Node Js",
      percent: 80,
    },
    {
      language: "Java",
      percent: 85,
    },
    {
      language: "Mongodb",
      percent: 70,
    },
    {
      language: "Python",
      percent: 70,
    },
    {
      language: "Github",
      percent: 90,
    },
  ];
  return (
    <>
      <section className="skill_seciton" id="resume">
        <div className="container">
          <h2 className="about_main_heading">Skills</h2>
          <div className="row">
            <div className="col-lg-3">
              <div className="skill_div">
                <div className="skills_sub_div">
                  <div style={{ width: 130, height: 130 }}>
                    <CircularProgressbar
                      value={90}
                      text={"90%"}
                      styles={buildStyles({
                        textColor: "#72e2ae",
                        pathColor: "#72e2ae",
                        trailColor: "#2d494d",
                      })}
                    />
                  </div>
                </div>
                <p className="frontend_para">Front-end Development</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="skill_div">
                <div className="skills_sub_div">
                  <div style={{ width: 130, height: 130 }}>
                    <CircularProgressbar
                      value={80}
                      text={"80%"}
                      styles={buildStyles({
                        textColor: "#72e2ae",
                        pathColor: "#72e2ae",
                        trailColor: "#2d494d",
                      })}
                    />
                  </div>
                </div>
                <p className="frontend_para">Mysql Database</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="skill_div">
                <div className="skills_sub_div">
                  <div style={{ width: 130, height: 130 }}>
                    <CircularProgressbar
                      value={85}
                      text={"85%"}
                      styles={buildStyles({
                        textColor: "#72e2ae",
                        pathColor: "#72e2ae",
                        trailColor: "#2d494d",
                      })}
                    />
                  </div>
                </div>
                <p className="frontend_para">Java</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="skill_div">
                <div className="skills_sub_div">
                  <div style={{ width: 130, height: 130 }}>
                    <CircularProgressbar
                      value={60}
                      text={"60%"}
                      styles={buildStyles({
                        textColor: "#72e2ae",
                        pathColor: "#72e2ae",
                        trailColor: "#2d494d",
                      })}
                    />
                  </div>
                </div>
                <p className="frontend_para">c++</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 skill_col">
              {skillData.map((item) => {
                return (
                  <>
                    <div className="skill_range_div">
                      <p className="skill_heading">
                        {item.language} ({item.percent}%)
                      </p>
                      <input
                        type="range"
                        id="skill"
                        value={item.percent}
                        min="10"
                        max="100"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
