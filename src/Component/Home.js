import React from "react";
import "../assets/css/Style.css";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import MySkills from "./MySkills";
import Experience from "./Experience";
import MyWorks from "./MyWorks";
import Contact from "./Contact";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
const Home = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <Hero />
      <About />
      <MySkills />
      <Experience />
      <MyWorks />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
