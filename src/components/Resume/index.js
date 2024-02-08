import React from "react";
import myResume from "../../assets/resume/cyber_sec_resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

function Resume() {
  return (
    <div>
      {/* Resume and Proficiencies section */}
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          {/* Section title */}
          <h2 className="section-title primary-border">Resume and Proficiencies</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              {/* Download resume link */}
              <p>Download my resume here!</p>
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume body section */}
      <section id="home-page-body" className="resume-body">
        {/* Cyber-Sec tools column */}
        <div className="article column1">
          {/* Column title */}
          <p className="column-title">Cyber-Sec tools</p>
          {/* Column content */}
          <p className="column-text">
            {/* List of proficiencies */}
            <ul>
              <li className="logo">
                {/* Icon for each proficiency */}
                <GrTechnology />
              </li>
              <li>SIEM</li>
              <li>EDR/XDR</li>
              <li>Firewalls</li>
              <li>Linux</li>
              <li>Windows</li>
              <li>Virtual Machines</li>
              <li>Cyber Sec Awareness Trainer</li>
            </ul>
          </p>
        </div>

        {/* Coding column */}
        <div className="article column3">
          {/* Column title */}
          <p className="column-title">Coding</p>
          {/* Column content */}
          <p className="column-text">
            {/* List of coding proficiencies */}
            <ul>
              <li className="logo">
                {/* Icon for each coding proficiency */}
                <GrDocumentPerformance />
              </li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Bash</li>
              <li>React</li>
              <li>MERN</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
