import Projects from "../../db/projectsDB";

const About = () => {
  return (
    <>
      <section className="about-me">
        <div className="about-me-left">
          <div className="card-about rounded-0">
            <div className="card-overlay">
              <h6 className="
              card-overlay-heading
              card-overlay-paragraph-about">{Projects[0].name}</h6>
              <div className="
              card-overlay-paragraph card-overlay-paragraph-description
              card-overlay-paragraph-about1
               ">{Projects[0].technologies}</div>
              <div className="
              card-overlay-paragraph card-overlay-paragraph-technologies
              card-overlay-paragraph-about2
              ">{Projects[0].description}</div>
            </div>
            <img src={require(`../../images/${Projects[0].img}.png`)} alt={Projects[0].imgAlt} className="about-img rounded-0" />
          </div>
        </div>
        <div className="about-me-right">
          <h1 className="main-heading" id='about'>About Brandon</h1>
          <h3 className="sub-heading">Background</h3>
          <div className="stars">
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
          </div>
          <p className="description">
            U.S Army Airborne Ranger Medic, pivoted to Technical Recruiter, now a Full Stack Web Developer and turbocharged about building the space of the future using modern, in-demand, and bleeding edge technologies!
          </p>
          <div className="stars">
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
            <i className="fas fa-star-of-life star"></i>
          </div>
          <a href='#skills'><button className="main-btn" type="button">Read More</button></a>
        </div>
      </section>
    </>
  );
};

export default About;