import React from "react";
import aboutUsLogo from "/logo.png"; // Adjust path if needed
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-card" id="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <img src={aboutUsLogo} alt="neonumerics logo" className="about-logo" />
        <p className="about-text">
          At <strong>NEONUMERICS</strong>, we provide B2B and B2C solutions to problems that need extensive numerical computing power, both mind 🧠and material⚙🖥️️. We serve in the areas of <i>CFD, Conjugate heat transfer, HPC development, Data-driven Simulations</i> and <i>Financial modelling</i>. We have a formidable array of hardware resources and advanced knowledge and tech base to solve your problems in these areas. We are a consulting company with in-depth expertise in our specilties. You can apprpach us with confidence and expect the best to be delivered...
        </p>
        <p> <b> Generally, we Specialize...</b> </p>
      </div>
    </div>
  );
};

export default AboutUs;
