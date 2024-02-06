import React from "react";
import Steven from "../../assets/images/Steven.jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro" style={{ backgroundColor: '#39a6b2' }}>
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <p>
           Hello! My name is Steven Owen and im an aspiring cybersecurity engineer, I have completed a cybersecurity bootcamp as well as a full stack coding boot camp both through SMU and currently have a valid Comptia Sec+ certification. This portfolio showcases some of my work.
          </p>
          <div class="intro-img">
            <img src={Steven} style={{ width: "80%" }} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;