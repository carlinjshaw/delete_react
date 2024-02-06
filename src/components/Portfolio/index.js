import React from "react";
import WorkDay from "../../assets/images/WorkDaySchedular.png";
import penetrationTest from "../../assets/images/penetrationTest.png";
import OpnsenseWazuh from "../../assets/images/OpnsenseWazuh.png";

function Portfolio() {
  return (
    <div>
      {/* Portfolio section */}
      <section id="work" className="jobs">
        <div className="flex-row">
          {/* Section title */}
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        {/* Opnsense firewall and Wazuh SIEM project */}
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              {/* Link to project video on YouTube */}
              <a href="https://www.youtube.com/watch?v=rzXCd87-i3g/">
                <img
                  src={OpnsenseWazuh}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="opnsensewazuh"
                />
              </a>
            </div>
            <div className="job-text">
              {/* Link to project video on YouTube */}
              <a href="https://www.youtube.com/watch?v=rzXCd87-i3g/">
                <h4>Opnsense firewall and Wazuh SIEM</h4>{" "}
              </a>
              <p>
                This is an open-source SOC environment created in a virtual
                box with four different virtual machines to mimic a SOC
                environment.
              </p>
            </div>
          </div>
        </div>

        {/* Penetration test example project */}
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              {/* Link to project documentation on Google Docs */}
              <a href="https://docs.google.com/document/d/1b2sYKlJeCwtyhZmGnBu2OH5Gr7xMEFTN_3cgk6c8tJ0/edit#heading=h.gjdgxs">
                <img
                  src={penetrationTest}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Penetration_test"
                />
              </a>
            </div>
            <div className="job-text">
              {/* Link to project documentation on Google Docs */}
              <a href="https://docs.google.com/document/d/1b2sYKlJeCwtyhZmGnBu2OH5Gr7xMEFTN_3cgk6c8tJ0/edit#heading=h.gjdgxs">
                <h4>Penetration test example</h4>{" "}
              </a>
              <p>
                Here is an example of a penetration test performed on several
                Windows servers using Metasploit.
              </p>
            </div>
          </div>
        </div>

        {/* Work day scheduler project */}
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              {/* Link to deployed Work Day Scheduler app */}
              <a href="https://srgowen.github.io/Schedular/">
                <img
                  src={WorkDay}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="workdayschedular"
                />
              </a>
            </div>
            <div className="job-text">
              {/* Link to deployed Work Day Scheduler app */}
              <a href="https://srgowen.github.io/Schedular/">
                <h4>Work day scheduler</h4>{" "}
              </a>
              <p>
                This app can be used to plan your workday by saving scheduled
                events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
