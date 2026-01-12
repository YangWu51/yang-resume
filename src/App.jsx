import { useState } from "react";
import "./App.css";
import profileImg from "./assets/p1.jpg";
import BackToTop from "./BackToTop";

function App() {
  const [open, setOpen] = useState({
    summary: false,
    skills: false,
    experience: false,
    project:false,
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
          <h2>Nina Wu</h2>
          <p className="subtitle">Software Engineer</p>

          <div className="contact">
            <h3>Contact</h3>
            <p><strong>Location:</strong> Birmingham, AL</p>
            <p><strong>Email:</strong> nina.sde.123@gmail.com</p>
            <p><strong>Phone:</strong> +1 (205)-952-6015</p>

            <p className="contact-block">
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/nina-8238b1382"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/nina-8238b1382
              </a>
            </p>

            <p className="contact-block">
              <strong>Personal Practice Website:</strong>
              <a
                href="https://yangpizzas.com"
                target="_blank"
                rel="noreferrer"
              >
                yangpizzas.com
              </a>
            </p>
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
                <ul>
                  <li>
                    Full-stack developer with <strong>10+ years</strong> of experience building
                    enterprise web applications and SaaS platforms in healthcare, construction,
                    and low-code automation domains.
                  </li>

                  <li>
                    Strong front-end expertise in <strong>React</strong>,
                    <strong>JavaScript</strong>, and <strong>TypeScript</strong>, developing
                    complex business UIs such as workflow configuration tools, cost calculation
                    systems, and hospital internal systems.
                  </li>

                  <li>
                    Experienced in state and server data management using
                    <strong>Redux</strong> and <strong>React Query</strong>, ensuring consistency
                    across multi-page workflows and long-running user interactions.
                  </li>

                  <li>
                    Designed and implemented <strong>RESTful APIs</strong> using
                    <strong>Node.js</strong> and <strong>Express.js</strong>, supporting workflow
                    execution, form configuration, cost calculations, and clinical data
                    updates.
                  </li>

                  <li>
                    Improved accessibility and responsive behavior in internal systems,
                    enhancing keyboard navigation, form usability, and layout behavior across
                    different screen sizes.
                  </li>

                  <li>
                    Focused on clean code structure and long-term maintainability, writing
                    reusable components and services that evolved smoothly as business
                    requirements changed.
                  </li>

                  <li>
                    Integrated <strong>AI-assisted</strong> features via <strong>Python</strong>,
                    where the <strong>Node.js</strong> backend passed validated data to an LLM
                    service to generate summaries and references, exposing results through
                    existing <strong>RESTful</strong> and <strong>GraphQL</strong> APIs to improve
                    clinician efficiency.
                  </li>

                  <li>
                    Built and maintained CI/CD pipelines using <strong>Docker</strong>,
                    <strong>Jenkins</strong>, and <strong>GitHub Actions</strong>, enabling
                    automated builds, testing, and deployments for both frontend and backend
                    services.
                  </li>

                  <li>
                    Used databases such as <strong>MySQL</strong>, choosing storage models based
                    on user needs like structured cost data, workflow records, and editable
                    submissions.
                  </li>

                  <li>
                    Collaborated with product managers, designers, <strong>QA</strong>, and
                    domain experts, translating real-world workflows into maintainable and
                    scalable software features.
                  </li>
                </ul>

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
                <p><strong>Programming Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java, SQL</p>
                <p><strong>Frontend & UI Development:</strong> React, Redux Toolkit, Next.js, TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, Material UI, React-Bootstrap, Styled Components, Vite, Webpack</p>
                <p><strong>Backend & APIs:</strong> Node.js, Express.js, RESTful API Design, JWT Authentication, Role-Based Access Control (RBAC), Axios</p>
                <p><strong>Databases & Cloud:</strong> MongoDB, PostgreSQL, MySQL, Redis, AWS Amplify, Firebase</p>
                <p><strong>DevOps & Deployment:</strong> Docker, Jenkins, GitHub Actions, CI/CD Pipeline Configuration, AWS Hosting</p>
                <p><strong>Testing & Debugging:</strong> Jest, React Testing Library, Postman, Chrome DevTools</p>
                <p><strong>Version Control & Collaboration:</strong> Git, GitHub, Jira, Agile/Scrum Methodology</p>

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
                <h3>Front-end Engineer — Encompass Health</h3>
                <p>Birmingham, AL | Sep 2022 – Present</p>
                <p>
                  A healthcare SaaS platform used internally by hospitals that handles patient
                  registration, therapy scheduling, rehabilitation progress tracking, and
                  telehealth sessions.
                </p>

                <ul>
                  <li>
                    Developed and maintained the UI layer of a hospital internal system using
                    <strong>React</strong>, supporting core clinical workflows such as patient
                    intake, scheduling, rehabilitation tracking, and telehealth sessions.
                  </li>
                  <li>
                    Built data-heavy dashboards and detailed views using <strong>Chart.js</strong>
                    to present rehabilitation scores and mobility trends, helping clinicians
                    monitor patient recovery more effectively.
                  </li>
                  <li>
                    Improved front end performance by splitting large pages and loading heavy
                    views on demand, reducing initial load time and making the UI feel more
                    responsive.
                  </li>
                  <li>
                    Added accessibility support such as keyboard navigation and clearer form
                    interactions to make internal clinical tools easier to use.
                  </li>
                  <li>
                    Used <strong>React Query</strong> to manage how the front end fetches and
                    updates data from <strong>RESTful</strong> and <strong>GraphQL</strong> APIs,
                    reducing manual state handling and keeping patient data in sync across pages.
                  </li>
                  <li>
                    Built and maintained <strong>RESTful APIs</strong> using
                    <strong>Node.js</strong> and <strong>Express.js</strong> to handle
                    state-changing operations including patient record updates, scheduling
                    changes, and telehealth status management, enforcing
                    <strong>JWT-based</strong> authentication and
                    <strong>role-based access control</strong>.
                  </li>
                  <li>
                    Used <strong>GraphQL</strong> queries and resolvers to retrieve and aggregate
                    patient data for dashboards and detailed views, fetching only the fields
                    needed by each view.
                  </li>
                  <li>
                    Integrated <strong>AI-assisted</strong> summaries and insights into existing
                    UI flows, allowing clinicians and internal teams to review patient progress
                    and notes more efficiently without disrupting established workflows.
                  </li>
                  <li>
                    Set up <strong>GitHub Actions</strong> with <strong>AWS Amplify</strong> so
                    front end changes could be built and deployed automatically after each
                    merge, avoiding manual releases and improving deployment reliability.
                  </li>
                </ul>


                <h3>Full-stack Developer — Glodon</h3>
                <p>Beijing, China | May 2020 – Jun 2022</p>
                <p>
                  A construction cost management system used by cost engineers to input material
                  quantities, query regional market prices, and calculate total project costs
                  during bidding and budgeting.
                </p>

                <ul>
                  <li>
                    Used <strong>React</strong> and <strong>TypeScript</strong> to build cost
                    calculation features, including material selection, quantity input, unit
                    price application, and total cost calculation.
                  </li>
                  <li>
                    Managed shared front-end state with <strong>Redux</strong>, such as the
                    current project, building section, cost category, selected pricing period,
                    and calculated results, ensuring cost data stayed consistent when users
                    switched between pages or cost types.
                  </li>
                  <li>
                    Replaced existing <strong>jQuery</strong>-based UI pages with
                    <strong>React</strong> components, removing direct DOM manipulation and
                    restructuring cost tables, input forms, and calculation logic into reusable
                    and maintainable components.
                  </li>
                  <li>
                    Implemented additional cost configuration pages beyond materials, including
                    labor costs, scaffolding setup fees, and other construction-related expenses,
                    where each cost type followed its own calculation logic.
                  </li>
                  <li>
                    Built <strong>RESTful APIs</strong> using <strong>Node.js</strong> and
                    <strong>Express.js</strong> to handle cost data input, calculation requests,
                    and persistence of project cost results, allowing the front end to load,
                    update, and recalculate costs reliably.
                  </li>
                  <li>
                    Implemented <strong>JWT-based</strong> authentication and
                    <strong>role-based access control</strong> to manage access to project and
                    cost data for different user roles.
                  </li>
                  <li>
                    Used <strong>MySQL</strong> to store structured data such as projects, cost
                    items, pricing records, and calculation results, supporting querying,
                    updates, reuse, and recalculation across different projects and time
                    periods.
                  </li>
                  <li>
                    Worked with cost engineers to review calculation edge cases such as rounding
                    rules, unit conversions, and special pricing, adjusting front-end validation
                    and backend calculation logic to match real bidding and budgeting workflows.
                  </li>
                </ul>


                <h3>Full-stack Developer — Mingdao Cloud</h3>
                <p>Shanghai, China | Jun 2017 – Apr 2020</p>
                <p>
                  A low-code workflow automation platform helping business users to build CRM and
                  HR systems visually without coding.
                </p>

                <ul>
                  <li>
                    Migrated existing workflow configuration pages from
                    <strong>AngularJS</strong> to <strong>React</strong> and <strong>Redux</strong>,
                    rebuilding visual form design and approval setup pages to improve
                    maintainability and support future feature expansion.
                  </li>
                  <li>
                    Implemented drag-and-drop form and workflow editing using
                    <strong>JavaScript</strong>, allowing users to reorder form fields, connect
                    workflow steps, and adjust approval order directly in the UI.
                  </li>
                  <li>
                    Maintained and updated existing <strong>AngularJS</strong> pages, fixing
                    bugs, making small feature changes, and building new features in
                    <strong>React</strong> to improve code reusability and long-term
                    maintainability.
                  </li>
                  <li>
                    Built <strong>RESTful APIs</strong> using <strong>Node.js</strong> and
                    <strong>Express.js</strong> to support workflow configuration, form data
                    storage, and workflow execution.
                  </li>
                  <li>
                    Added API-level validation and permission checks on the server side to
                    control who could submit requests, approve steps, or modify workflow data,
                    preventing invalid operations and unauthorized changes.
                  </li>
                  <li>
                    Used <strong>Docker</strong> and <strong>Jenkins</strong> pipelines to
                    automate build and deployment processes, making releases more consistent and
                    reducing manual deployment steps.
                  </li>
                  <li>
                    Collaborated with product managers, designers, and QA engineers to review
                    workflow behavior, clarify edge cases in approval logic, and adjust UI
                    behavior based on market research and customer feedback.
                  </li>
                </ul>

                <h3>Full-stack Developer Intern – Mingdao Cloud</h3>
                <p>Shanghai, China | Jul 2015 – May 2017</p>

                <p>
                  A low-code workflow automation platform helping business users to configure
                  workflow processes and form-based systems without extensive coding.
                </p>

                <ul>
                  <li>
                    Maintained and updated existing <strong>AngularJS</strong> pages for workflow
                    configuration and form setup, fixing UI bugs and making small feature
                    adjustments.
                  </li>
                  <li>
                    Implemented basic form fields, validation rules, and approval step
                    configuration using <strong>JavaScript</strong>, following existing workflow
                    logic.
                  </li>
                  <li>
                    Maintained and updated existing <strong>AngularJS</strong> pages, fixing bugs,
                    making small feature changes, and built new features in <strong>React</strong>
                    to improve code reusability, efficiency, and long-term maintainability.
                  </li>
                  <li>
                    Assisted in integrating front-end pages with <strong>RESTful APIs</strong> to
                    load and save workflow and form configuration data.
                  </li>
                  <li>
                    Supported senior engineers with testing, debugging, and verifying UI
                    behavior to ensure changes matched business requirements.
                  </li>
                </ul>


              </div>
            )}
          </section>

          {/* ===== projectt===== */}
          

<section className="accordion">
            <div
              className={`accordion-header ${open.project ? "open" : ""}`}
              onClick={() => toggle("project")}
            >
              <span>Personal Practice Website</span>
              <span className="arrow">{open.project ? "▲" : "▼"}</span>
            </div>

            {open.project && (
              <div className="accordion-body">
                <div class="section-content">
    <p>
      <strong>Food Ordering Website:</strong>
      <a href="http://yangpizzas.com" target="_blank">
        http://yangpizzas.com
      </a>
    </p>

    <ul>
      <li>
        Developed a full-stack food ordering application using the MERN stack with a dynamic React front end and Node.js / Express backend.
      </li>
      <li>
        Implemented Redux-based state management and responsive UI using HTML and CSS to improve usability across devices.
      </li>
      <li>
        Designed secure REST APIs with JWT-based role-based access control for users and admins.
      </li>
      <li>
        Integrated Stripe for secure payment processing and order checkout.
      </li>
      <li>
        Deployed the application on AWS EC2 with Route 53 and custom domain configuration.
      </li>
    </ul>
  </div>


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
                <h3>Henan University of Urban Construction</h3>
                <p>B.E. in Engineering Cost Management</p>


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
