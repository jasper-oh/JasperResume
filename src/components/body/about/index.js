import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          {/* 배치수정 ====%%%% */}
          안녕하세요 👋, 개발자 <br />
          <span className="info-name">오영준 Jasper</span> 입니다!
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
