import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
  return (
    <>
    <input id="main-menu-checkbox" type="checkbox" />
    <header>
      <div>
      <label htmlFor="main-menu-checkbox" className="menu-toggle">
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </label>
      <Link to='/' className="logo">Rachel Tang</Link>
      </div>
      <nav role="navigation" id="main-menu" className="main-menu" aria-expanded="false" aria-label="Main menu">
      <label htmlFor="main-menu-checkbox" className="menu-close">
        <span className="sr-only">Close main menu</span>
        <span className="fa fa-times" aria-hidden="true"></span>
      </label>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/#/projects">Projects</Link></li>
          <li><a href="https://resume.creddle.io/resume/e0p2fjjet2f" target="_blank" rel="noopener noreferrer">Resume</a></li>
          
          <li><Link to="/#/contact">Say Hi</Link></li>
        </ul>
      </nav>
      <label htmlFor="main-menu-checkbox"
        className="backdrop"
        tabIndex="-1"
        aria-hidden="true" hidden>
      </label>
    </header> 
    </> 
  )
}