import React from "react";
import "./TechStackCard.css";
import techStackImage from "../assets/techstack.png"; // Update with your actual path

const TechStackCard = () => {
  return (
    <div className="techstack-card" id ="techstack">
      <h3 className="techstack-title">Tech Stack</h3>
      <div className="techstack-image-wrapper">
        <img
          src={techStackImage}
          alt="Our Tech Stack"
          className="techstack-image"
        />
      </div>
    </div>
  );
};

export default TechStackCard;
