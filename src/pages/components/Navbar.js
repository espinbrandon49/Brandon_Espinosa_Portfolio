import React, { useState } from 'react'
import img1 from '../../images/hack-a-thought.png'
import img2 from '../../images/exchange-rate-calculator.png'
import img3 from '../../images/expense-tracker.png'

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <nav className="navbar">
      <input type="checkbox" id="check" className="checkbox" onChange={handleChange} checked={isChecked} hidden />
      <div className="hamburger-nav">
        <label htmlFor="check" className="hamburger">
          <div className="hamburger-line hamburger-line-1"></div>
          <div className="hamburger-line hamburger-line-2"></div>
          <div className="hamburger-line hamburger-line-3"></div>
        </label>
      </div>
      <div className="navbar-navigation">
        <div className="navbar-navigation-left">
          <a href='https://hackathought.herokuapp.com/' target='_blank'>
            <img src={img1} className="left-img left-img-1" alt='clickable hangman app'/>
          </a>
          <a href='https://espinbrandon49.github.io/Exchange-Rate-Calculator/' app target="_blank" rel="noreferrer">
            <img src={img2} className="left-img left-img-2"  alt='clickable exchange rate calculator'/>
          </a>
          <a href='https://espinbrandon49.github.io/Expense-Tracker/'>
            <img src={img3} className="left-img left-img-3"  alt='clickable movie seat booking app'/>
          </a>
        </div>
        <div className="navbar-navigation-right">
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#home" onClick={handleChange} className="nav-list-link">Home</a>
            </li>
            <li className="nav-list-item">
              <a href="#about" onClick={handleChange} className="nav-list-link">About</a>
            </li>
            <li className="nav-list-item">
              <a href="#skills" onClick={handleChange} className="nav-list-link">Technical Skills</a>
            </li>
            <li className="nav-list-item">
              <a href="#portfolio" onClick={handleChange} className="nav-list-link">Portfolio</a>
            </li>
            <li className="nav-list-item">
              <a href="#resume" onClick={handleChange} className="nav-list-link">Resume</a>
            </li>
            <li className="nav-list-item">
              <a href="#contact" onClick={handleChange} className="nav-list-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar