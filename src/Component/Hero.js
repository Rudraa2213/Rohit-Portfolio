import React from "react";
import myImage from "../assets/img/Portfolio.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "../helpers/SocialIcons";

const Hero = () => {
    return (
        <>
            <section className="hero_section" id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 banner_col">
                            <div className="hero_content">
                                <img src={myImage} className="hero_image fade-in-up" alt="mera foto"/>
                                <h2>
                                    Hi, I am
                                    <TypeAnimation
                                        sequence={[
                                            " Rohit Sahani",
                                            1000,
                                            " Fullstack Developer",
                                            1000,
                                            " Java Developer",
                                            1000,
                                            " React Developer",
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        className="hero_heading"
                                        repeat={Infinity}
                                    />
                                </h2>
                                <p className="fade-in-up">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500
                                </p>

                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
