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
          <br /> 분야를 가리지 않고, 스펀지 같은 흡수력으로 <br />
          끊임없이 성장중입니다 !
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
