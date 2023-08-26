import React from "react";
import pdf from "../../pdf/Brandon_Espinosa_Resume.pdf";

const Resume = () => {
  return (
    <section className="resume" >
      <div className="resume-heading" id="resume">
        <h3 className="resume-main-heading">Brandon Espinosa Resume</h3>
        <h3 className="resume-sub-heading">Full Stack Web Developer</h3>
        <div className="resume-sm-heading">Portfolio: <a className="resume-sm-heading-link" href="https://rb.gy/95tdd">https://rb.gy/95tdd </a>| Email:  <a className="resume-sm-heading-link" href="mailto:" >espinbrandon49@gmail.com</a> | Phone: 313-645-0722
          <div>Los Angeles, CA / Remote</div></div>
        <div className="resume-sm-heading">Available For Relocation to Anywhere In the U.S.</div>
      </div>

      <div className="resume-body container">
        <div className="resume-body-section" >
          <h4 className="resume-subtitle ">U.S. Army - Special Operations Healthcare Specialist</h4>
          <ul className="resume-list">
            <li className="resume-list-item">75th Ranger Regiment, Ft. Benning, GA</li>
            <li className="resume-list-item">Honorable Discharge, Commendation Medal for Valor</li>
            <li className="resume-list-item">Supported unit readiness by providing healthcare support in garrison and in the field</li>
          </ul>
        </div>

        <div className="resume-technical resume-body-section">
          <h4 className="resume-subtitle">
            U.C. Berkeley Extension Full Stack Coding
          </h4>
          <div className="resume-technical-cols">
            <div className="resume-col1">
              <ul className="resume-list">
                <li className="resume-list-item resume-list-title">Computer Science applied to JavaScript</li>
                <li className="resume-list-item">Algorithms (Searches, Sorts)</li>
                <li className="resume-list-item">Performance</li>
                <li className="resume-list-item">Time Complexity</li>
                <li className="resume-list-item">Big O Notation</li>
                <li className="resume-list-item">Data Structures</li>
                <br />
                <li className="resume-list-item resume-list-title">Browser Based Technologies</li>
                <li className="resume-list-item">HTML/CSS</li>
                <li className="resume-list-item">JavaScript</li>
                <li className="resume-list-item">Responsive Design</li>
                <li className="resume-list-item">Bootstrap</li>
                <li className="resume-list-item">Progressive Web Applications (PWAs)</li>
                <li className="resume-list-item">Local Storage, Session Storage, IndexedDB</li>
                <li className="resume-list-item">React.js</li>
                <br />
                <li className="resume-list-item resume-list-title">Databases</li>
                <li className="resume-list-item">MySQL</li>
                <li className="resume-list-item">MongoDB</li>
              </ul>
            </div>
            <div className="resume-col2">
              <ul className="resume-list">
                <li className="resume-list-item resume-list-title">
                  Server Side Development</li>
                <li className="resume-list-item" >User Authentication</li>
                <li className="resume-list-item" >Template Engines</li>
                <li className="resume-list-item" >MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                <br />
                <li className="resume-list-item resume-list-title">API Design</li>
                <li className="resume-list-item" >Client-Server Model</li>
                <li className="resume-list-item" >API</li>
                <li className="resume-list-item" >Rest</li>
                <li className="resume-list-item" >JSON</li>
                <li className="resume-list-item" >AJAX (Fetch API)</li>
                <li className="resume-list-item" >HTTP request methods</li>
                <li className="resume-list-item" >GraphQL</li>
              </ul>
            </div>
            <div className="resume-col3">
              <ul className="resume-list">
                <li className="resume-list-item resume-list-title">
                  Deployment and Delivery</li>
                <li className="resume-list-item" >Deployment and Delivery</li>
                <li className="resume-list-item" >Heroku</li>
                <li className="resume-list-item" >Git</li>
                <li className="resume-list-item" >GitHub Pages</li>
                <li className="resume-list-item" >Shell Scripting</li>
                <li className="resume-list-item" >Unit Testing</li>
                <li className="resume-list-item" >Continuous Integration</li>
                <br />
                <li className="resume-list-item resume-list-title">Object-oriented programming (Java)</li>
                <li>Datatypes and Control Flow</li>
                <li className="resume-list-item" >Inheritance</li>
                <li className="resume-list-item" >Polymorphism</li>
                <li className="resume-list-item" >Abstraction</li>
                <li className="resume-list-item" >Encapsulation</li>
                <li className="resume-list-item" >Design Patterns, Interface, Serialization</li>
                <li className="resume-list-item" >Maven, Gradle</li>
                <li className="resume-list-item" >Spring MVC</li>
                <li className="resume-list-item" >JUnit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-work resume-body-section">
          <h4 className="resume-subtitle">Smith Hampton & Devlin, LLC - Technical Recruiter</h4>
          <div>Oakland, CA</div>
          <ul className="resume-list">
            <li className="resume-list-item">Implement technical staffing and recruiting processes, strategies, and solutions</li>
          </ul>
        </div>

        <div className="resume-education resume-body-section">
          <h4 className="resume-subtitle">University of Phoenix</h4>
          <div>Phoenix, AZ</div>
          <ul className="resume-list">
            <li className="resume-list-item">Bachelor of Science in Psychology</li>
          </ul>
        </div>
      </div>
      <a href={pdf} target='__blank' download><button type="button" className="resume-main-btn main-btn">Download</button>
      </a>
    </section >
  );
};

export default Resume;
