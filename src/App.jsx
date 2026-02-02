import { useState } from "react";
import "./App.css";
import profileImg from "./assets/p2.jpg";
import BackToTop from "./BackToTop";

function App() {
  const [open, setOpen] = useState({
    summary: false,
    skills: false,
    experience: false,
    project: false,
    education: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <header className="hero">
        <div className="hero-overlay">
          {/* <h1>Nina Wu</h1>
          <p>Software Engineer</p> */}
        </div>
      </header>

      <div className="main">
        {/* ===== 左侧（不改） ===== */}
        <aside className="sidebar">
          <img className="avatar" src={profileImg} alt="profile" />
          <h2>Yang Wu</h2>
          <p className="subtitle">Full Stack Software Engineer</p>
          <div className="contact">
            <h3>Contact</h3>
            <p><strong>Open to Relocation</strong> </p>
            <p><strong>Location:</strong> Birmingham, AL</p>
            <p><strong>Email:</strong> yang.wu.sde@gmail.com</p>
            <p><strong>Phone:</strong> +1 (205)-835-3844</p>
            <p className="contact-block">
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/yang-wu-sde"
                target="_blank"
                rel="noreferrer"
              >
                www.linkedin.com/in/yang-wu-sde
              </a>
            </p>

            {/* // FORCE GIT CHANGE */}
          </div>
        </aside>

        {/* ===== 右侧内容 ===== */}
        <div className="content">

          {/* ===== Summary ===== */}
          <section className="accordion">
            <div
              className={`accordion-header ${open.summary ? "open" : ""}`}
              onClick={() => toggle("summary")}
            >
              <span>Summary</span>
              <span className="arrow">{open.summary ? "▲" : "▼"}</span>
            </div>

            {open.summary && (
              <div className="accordion-body">
                <strong>Full stack software engineer</strong> with <strong>3+</strong> years of experience building
                web-based enterprise applications using <strong>JavaScript</strong>, <strong>React</strong>, <strong>Angular</strong>,and <strong>Node.js</strong>.
                Experienced in developing <strong>RESTful APIs</strong> and supporting production workflows.
                Earned a Master’s degree in Computer Science in 2025.
              </div>
            )}
          </section>

          {/* ===== Skills ===== */}
          <section className="accordion">
            <div
              className={`accordion-header ${open.skills ? "open" : ""}`}
              onClick={() => toggle("skills")}
            >
              <span>Skills</span>
              <span className="arrow">{open.skills ? "▲" : "▼"}</span>
            </div>

            {open.skills && (
              <div className="accordion-body">
                <p>
                  <strong>Languages:</strong> JavaScript (3+ years), Java (3+ years), Python, C, C++, C#, TypeScript, SQL.
                </p>

                <p>
                  <strong>Tools/Frameworks:</strong> React, AWS, RESTful APIs, Node.js, Bootstrap, Express.js, JUnit, Angular, HTML, CSS.
                </p>

                <p>
                  <strong>Databases:</strong> MySQL, MongoDB.
                </p>
              </div>
            )}


          </section>


          {/* ===== Experience ===== */}
          <section className="accordion">
            <div
              className={`accordion-header ${open.experience ? "open" : ""}`}
              onClick={() => toggle("experience")}
            >
              <span>Experience</span>
              <span className="arrow">{open.experience ? "▲" : "▼"}</span>
            </div>

            {open.experience && (
              <div className="accordion-body">
                {/* ===== Internship ===== */}
                {/* ===== Internship ===== */}
                <h3>Software Engineer Internship: Voyce Global, Inc.</h3>
                <p>Sunrise, FL | May 2024 – Aug. 2024</p>

                <ul>
                  <li>
                    Built and enhanced responsive, component based front end features for the
                    client registration portal and internal dashboards using{" "}
                    <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>,{" "}
                    <strong>CSS</strong>, <strong>React Bootstrap</strong>, and{" "}
                    <strong>Stripe</strong>, improving usability and visual consistency across
                    the application.
                  </li>

                  <li>
                    Helped develop and improve internal dashboards used to manage patient
                    translation services by refining layouts and interactions, making daily
                    workflows clearer and easier to use.
                  </li>

                  <li>
                    Integrated multiple <strong>RESTful APIs</strong> for client registration,
                    authentication, and service configuration, supporting API integration in a
                    client server architecture and ensuring reliable data flow between the
                    front end and back end services.
                  </li>

                  <li>
                    Worked closely with team members using <strong>GitHub</strong> and{" "}
                    <strong>Jira</strong> to track tasks, coordinate work, and support on time
                    delivery in an Agile development environment.
                  </li>
                </ul>





                {/* ===== Glodon ===== */}
                {/* ===== Glodon ===== */}
                <h3>Full Stack Software Engineer: Glodon Company Limited</h3>
                <p>Beijing, China | Oct. 2018 – Sep. 2021</p>

                <ul>
                  <li>
                    Developed and maintained construction cost and project management applications used by enterprise clients, building front-end features with{" "}
                    <strong>Angular</strong> and <strong>TypeScript</strong>, and back-end
                    services with <strong>Java and Node.js</strong> to support daily business operations.
                  </li>

                  <li>
                    Built and maintained <strong>RESTful APIs</strong> using{" "}
                    <strong>Node.js</strong> and <strong>Express.js</strong>, handling request
                    and response flows, data validation, and core business logic for project
                    management and cost calculation workflows.
                  </li>

                  <li>
                    Implemented <strong>JWT</strong>-based authentication and role-based access
                    control to manage permissions for different user roles and protect sensitive
                    project and cost data.
                  </li>

                  <li>
                    Created reusable <strong>Angular</strong> components and shared UI patterns
                    to keep interfaces consistent and reduce duplication across multiple
                    modules.
                  </li>

                  <li>
                    Worked with product and engineering teams to support stable releases through
                    existing <strong>CI/CD </strong>workflows, helping ensure reliable
                    deployments and predictable feature delivery.
                  </li>
                </ul>




              </div>
            )}
          </section>




          {/* ===== Education ===== */}
          <section className="accordion">
            <div
              className={`accordion-header ${open.education ? "open" : ""}`}
              onClick={() => toggle("education")}
            >
              <span>Education</span>
              <span className="arrow">{open.education ? "▲" : "▼"}</span>
            </div>

            {open.education && (
              <div className="accordion-body">
                <h3>University of Alabama at Birmingham</h3>
                <p>M.S. in Computer Science</p>



              </div>
            )}
          </section>

        </div>
      </div>
      <BackToTop />
    </>
  );
}

export default App;
