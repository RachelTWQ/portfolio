import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
  return (
    <header>
      <div>
      <a href="#main-menu" id="main-menu-toggle" className="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <span className="fa fa-bars" aria-hidden="true"></span>
      </a>
      <Link to='/' className="logo">Rachel Tang</Link>
      </div>
      <nav id="main-menu" className="main-menu" aria-label="Main menu">
        <a href="#main-menu-toggle"
          id="main-menu-close"
          className="menu-close"
          aria-label="Close main menu">
          <span className="sr-only">Close main menu</span>
          <span className="fa fa-close" aria-hidden="true"></span>
        </a> 
        <ul>
          <li><a href="https://resume.creddle.io/resume/e0p2fjjet2f" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Say Hi</Link></li>
        </ul> 
      </nav>
      <a href="#main-menu-toggle"
        className="backdrop"
        tabIndex="-1"
        aria-hidden="true" hidden>
      </a>
    </header>  
  )
}