import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          {/* 배치수정 ====%%%% */}
          Hello 👋, I am a developer <br />
          <span className="info-name">Jasper</span>
          <br /> constantly growing with <br />
          absorbing every kind of field.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding4.png").default}
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
