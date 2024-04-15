import React from "react";
import pdf from "../../pdf/Brandon_Espinosa_Resume.pdf";

const Resume = () => {
  return (
    <section className="resume" >
      <div className="resume-heading" id="resume">
        <h3 className="resume-main-heading">Brandon Espinosa Resume</h3>
        <h3 className="resume-sub-heading">Full Stack Software Developer</h3>
        <div className="resume-sm-heading">Portfolio: <a className="resume-sm-heading-link" href="https://rb.gy/95tdd">https://rb.gy/95tdd </a>| Email:  <a className="resume-sm-heading-link" href="mailto:" >espinbrandon49@gmail.com</a> | Phone: 313-645-0722
          <br></br>Address:  Detroit, MI / or Remote / Available to relocate</div>
      </div>

      <div className="resume-body container">
        <div className="resume-technical resume-body-section">
          <h4 className="resume-header">Technical Experience</h4>
          <ul className="technical-skills-list">
            <li><strong>Computer Science</strong> - Algorithms (Searches, Sorts), Performance, Time Complexity, Data Structures</li>
            <li><strong>Browser Based Technologies</strong> - HTML/CSS, JavaScript, Responsive Design, Bootstrap, React.js</li>
            <li><strong>Databases </strong> - MySQL, MongoDB</li>
            <li><strong>Server Side Development</strong> - User Authentication, Template Engines, MERN (MongoDB, Express.js, React.js, Node.js)</li>
            <li><strong>API Design </strong> - Client-Server Model, API, Rest, JSON, AJAX (Fetch API), HTTP request methods, GraphQL</li>
            <li><strong>Deployment and Delivery</strong> - Git, GitHub, Heroku, Shell Scripting, Unit Testing, Linting, Continuous Integration</li>
            <li><strong>Object-oriented programming</strong> - Java Core, OOP, Design Patterns, Interfaces, Microservices, Rest Webservices, Maven, Gradle, Spring Boot, JUnit</li>
          </ul>
        </div>

        <div className="resume-work resume-body-section">
          <h4 className="resume-header">Work Experience</h4>
          <h4 className="resume-subtitle">University of California, Berkeley - Technical Instructor</h4>
          <div>October 2023 - Current | Oakland, CA</div>
          <ul className="resume-list">
            <li className="resume-list-item">Lead instructor teaching a sociotechnical and software development or data science curriculum</li>
            <li className="resume-list-item">Leverage existing instructor materials and student resources (course outlines, instructional materials, and training aids)</li>
            <li className="resume-list-item">Provide small group mentorship opportunities and technical support to students</li>
            <li className="resume-list-item">Collaborate with the team to ensure all student data is collected and accurate in a timely manner</li>
          </ul>

          <h4 className="resume-subtitle">Facebook - Associate Software Developer, User Engagement</h4>
          <div>November 2022 - October 2023 | Menlo Park, CA</div>
          <ul className="resume-list">
            <li className="resume-list-item"> Refined application features per business requirement changes, enabling the introduction of new features aimed at improving user engagement</li>
            <li className="resume-list-item"> Implemented responsive web design principles to ensure platform updates rendered well across multiple devices</li>
            <li className="resume-list-item">Collaborated with a team of 5 developers for an e-commerce transaction application designing payment interfaces</li>
            <li className="resume-list-item"> Contributed in the front-end development of a major content management system update, enhancing user experience and operational efficiency</li>
          </ul>

          <h4 className="resume-subtitle">Facebook - Software Developer Intern</h4>
          <div>June 2022 - November 2022 | Menlo Park, CA</div>
          <ul className="resume-list">
            <li className="resume-list-item">Coded embedded stylesheets into existing Javascript interfaces that reduced load times by as much as 80%</li>
            <li className="resume-list-item">Assisted 25 junior & senior employees in testing programming code and applications</li>
            <li className="resume-list-item">Compiled 120 bi-weekly reports that the line supervisor reviewed during company-wide fireside chats</li>
            <li className="resume-list-item">Collaborated with 20 team members to design creative UX solutions on the platform</li>
          </ul>
        </div>

        <div className="resume-education resume-body-section">
          <h4 className="resume-header">Education</h4>
          <h4 className="resume-subtitle">University of California, Berkeley</h4>
          <div>Berkeley, CA | 2018 - 2022</div>
          <ul className="resume-list">
            <li className="resume-list-item">Bachelor of Science in Computer Science</li>
          </ul>
          <h4 className="resume-subtitle">University of California, Berkeley</h4>
          <div>Berkeley, CA | 2022</div>
          <ul className="resume-list">
            <li className="resume-list-item">Berkeley Coding Bootcamp</li>
            <li className="resume-list-item">Full Stack Software Development</li>
          </ul>
        </div>
      </div>
      <a href={pdf} target='__blank' download><button type="button" className="resume-main-btn main-btn">Download</button>
      </a>
    </section >
  );
};

export default Resume;
