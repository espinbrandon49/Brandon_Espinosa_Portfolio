import logo from '../../images/brandon1.jpg'
import pdf from "../../pdf/Brandon_Espinosa_Resume.pdf"

const Home = () => {
  return (
    <div className="header" id='home'>
      <div className="brand">
        <a href="#" className=""><img className='logo' src={logo} />
        </a>
        <div>
          <h1 className="main-name">Brandon Espinosa</h1>
          <p className="sub-name">Full Stack Web Developer</p>
        </div>
      </div>
      <div className="header-banner">
        <h1 className="main-heading">Welcome</h1>
        <h3 className="sub-heading">Skilled in JavaScript, Node.js, React, MERN, and Java</h3>
        <a href={pdf} target='__blank' download><button type="button" className="main-btn">Resume</button>
        </a>
      </div>
    </div>
  )
}

export default Home