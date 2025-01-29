import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <section className="experience_section">
        <div className="container">
          <h2 className="about_main_heading">Education & Experience</h2>
          <div className="row">
            <div className="col-lg-12">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2017 - 2018"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaSchool />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Intermediate
                  </h3>
                  <p>
                    St. Xavier's School in Belthara,Ballia
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2018 - 2021"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaUniversity />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Arts{" "}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    In English
                  </h4>
                  <p>Jananayak Chandrashekhar University Ballia</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2020 - 2021"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaUniversity />}
                >
                  <h3 className="vertical-timeline-element-title">
                    ADVANCE DIPLOMA IN COMPUTER APPLICATION{" "}
                  </h3>
                  <p>Career Computer Institute Laxmanpur ballia</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Jan 2022 - Jan 2025"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaBuilding />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Computer Application
                  </h3>

                  <p>From Online Distance Learning</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Feb 2023 - Feb 2024"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaBuilding />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Java Fullstack
                  </h3>

                  <p>Ducat It Training center</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2024 May 1 - Present"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaBuilding />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Frontend Developer
                  </h3>

                  <p>Fda india (Noida)</p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Nov 2022 - Apr 2024"
                  iconStyle={{ background: "#72e2ae", color: "#fff" }}
                  icon={<FaBuilding />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Frontend Developer/App Developer
                  </h3>

                  <p>Isynbus Technology Private Limited (Noida)</p>
                </VerticalTimelineElement> */}
              </VerticalTimeline>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
