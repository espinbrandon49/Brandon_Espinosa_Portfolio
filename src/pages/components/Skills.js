const Skills = () => {
  return (
    <section className='technical-skills' id="skills">
      <h3 className="main-heading">Technical Skills</h3>
      <h3 className="sub-heading">Skilled in CRUD - Databases, UI Design, and APIs
      </h3>
      <div className='skills'>
        <ul className='skills-col-left'>
          <li>
            <div className="skills-subheading">Computer Science applied to JavaScript</div>
            <ul>
              <li>
                <li>Algorithms (Searches, Sorts)</li>
                <li>Performance</li>
                <li>Time Complexity</li>
                <li>Big O Notation</li>
                <li>Data Structures</li>
              </li>
            </ul>
          </li>
          <br />

          <li>
            <div className="skills-subheading">
              Browser Based Technologies
            </div>
            <ul>
              <li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Progressive Web Applications (PWAs)</li>
                <li>Local Storage, Session Storage, IndexedDB</li>
                <li>React.js</li>
              </li>
            </ul>
          </li>
          <br />

          <li>
            <div className="skills-subheading">
              Databases
            </div>
            <ul>
              <li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </li>
            </ul>
          </li>
          <br />

          <li>
            <div className="skills-subheading">
              Server Side Development
            </div>
            <ul>
              <li>
                <li>User Authentication</li>
                <li>Template Engines</li>
                <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
              </li>
            </ul>
          </li>
        </ul>
        <br />

        <ul className='skills-col-right'>
          <li>
            <div className="skills-subheading">
              API Design
            </div>
            <ul>
              <li>
                <li>Client-Server Model</li>
                <li>API</li>
                <li>Rest</li>
                <li>JSON</li>
                <li>AJAX (Fetch API)</li>
                <li>HTTP request methods</li>
                <li>GraphQL</li>
              </li>
            </ul>
          </li>
          <br />

          <li>
            <div className="skills-subheading">
              Deployment and Delivery
            </div>
            <ul>
              <li>
                <li>Deployment and Delivery</li>
                <li>Heroku</li>
                <li>Git</li>
                <li>GitHub Pages</li>
                <li>Shell Scripting</li>
                <li>Unit Testing</li>
                <li>Continuous Integration</li>
              </li>
            </ul>
          </li>
          <br />

          <li>
            <div className="skills-subheading">
              Object-oriented programming (Java)
            </div>
            <ul>
              <li>
                <li>Datatypes and Control Flow</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encapsulation</li>
                <li>Design Patterns, Interface, Serialization</li>
                <li>Maven, Gradle</li>
                <li>Spring MVC</li>
                <li>JUnit</li>
              </li>
            </ul>
          </li>
          <br />
        </ul>
      </div>

      <a href="#portfolio"><button className="main-btn" type="button">
        Gallery
      </button></a>
    </section>
  )
}

export default Skills