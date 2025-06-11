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
          At <strong>NEONUMERICS</strong>, we engineer cutting-edge Agentic AI solutions across industries like finance, medicine, journalism, and blockchain. From vision to deployment, our AI agents autonomously analyze, reason, and act — delivering reliable automation with human-like insight. With expertise in NLP, CV, and system integration, we architect scalable solutions that drive productivity, insight, and growth. Let’s build the future of intelligence together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
