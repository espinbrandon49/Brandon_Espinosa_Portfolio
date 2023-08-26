import Projects from "../../db/projectsDB";

const Portfolio = () => {
  return (
    <section className="gallery" id="portfolio">
      <h3 className="main-heading">Portfolio</h3>
      <h3 className="sub-heading">Adept at contributing to highly collaborative work environments and finding solutions
      </h3>
      <div className="cards-wrapper">
        {Projects.map((project, i) => {
          return (
            <div className="card rounded-0" key={i} >
              <div className="card-overlay">
                <h6 className="card-overlay-heading">{project.name}</h6>
                <div className="card-overlay-paragraph card-overlay-paragraph-description">{project.description}</div>
                <div className="card-overlay-paragraph card-overlay-paragraph-technologies">{project.technologies}</div>
                <div className="card-overlay-btns">
                  <button type="button" className="card-overlay-btn-wrapper">
                    <a rel="noreferrer" href={project.githubRepo} target="_blank" className="card-overlay-btn-link">
                      <i className="fa-brands fa-github card-overlay-btn"></i>
                    </a>
                  </button>
                  <button type="button" className="card-overlay-btn-wrapper">
                    <a rel="noreferrer" href={project.deployedLink} target="_blank"  className="card-overlay-btn-link">
                      <i className="fa-solid fa-globe card-overlay-btn"></i>
                    </a>
                  </button>
                </div>
              </div>
              <a className="img-link" rel="noreferrer" href={project.deployedLink} target="_blank">
                <img src={require(`../../images/${project.img}.png`)} alt={project.imgAlt} className="card-img rounded-0" />
              </a>
            </div>
          )
        })}
      </div>
      <div className="gallery-btns">
        <a href="#resume"><button className="main-btn">Resume</button></a>
        <a href="#contact"> <button className="main-btn">Contact</button></a>
      </div>
    </section>
  );
};

export default Portfolio;
