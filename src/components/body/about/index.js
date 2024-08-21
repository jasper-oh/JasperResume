import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
import codingImage from "../../../assets/image/coding5.jpg";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          {/* 배치수정 ====%%%% */}
          Hello 👋, I am a developer <br />
          <span className="info-name">Jasper</span>
          <br /> constantly growing and <br />
          exploring new fields.
        </div>
        <div className="about-photo">
          <img
            src={codingImage}
            alt="coding"
            className="picture"
            id="picturething"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
