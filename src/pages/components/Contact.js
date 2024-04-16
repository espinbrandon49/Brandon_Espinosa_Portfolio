import React from 'react';
import logo from '../../images/brandon_image.jpg'

const Contact = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-header">
        <a href="#" className=""><img className='logo' src={logo} />
        </a>
        <div>
          <h1 className="main-name">Brandon Espinosa</h1>
          <p className="sub-name">Full Stack Software Developer</p>
        </div>
      </div>
      <div className="footer-social-media">
        <a href="https://www.linkedin.com/in/brandon-espinosa-59b5b428b" className="social-media-link" target='_blank'>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/espinbrandon49" className="social-media-link" target='_blank'>
          <i class="fa-brands fa-square-github"></i>
        </a>
      </div>
      <div className="footer-contact-info">
        <p className="footer-contact-info-paragraph">
          <div>Phone: 313-645-0722</div>
          <div>Email: espinbrandon439@gmail.com</div>
          <div>Address: Detroit, MI </div>
        </p>
        <p className="footer-contact-info-paragraph">
          Available to relocate to anywhere in the U.S.
        </p>
      </div>
      <a className='footer-repo-link' href='https://github.com/espinbrandon49/Brandon_Espinosa_Portfolio' target='_blank'>
        <div class="footer-github">
          <p class="footer-github-paragraph">
            <i className="fa-brands fa-github"></i>
            &nbsp; Portfolio Code Repository
          </p>
        </div>
      </a>
    </footer>
  )
}

export default Contact
