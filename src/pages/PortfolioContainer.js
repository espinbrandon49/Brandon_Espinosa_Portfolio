import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

import "../css/base.css"
import "../css/navigation.css"
import "../css/home.css"
import "../css/about.css"
import "../css/skills.css"
import "../css/portfolio.css"
import "../css/resume.css"
import "../css/contact.css"

const PortfolioContainer = () => {
  return (
    <>
      <Navbar />
      <div className="container" >
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </>
  )
};

export default PortfolioContainer;
