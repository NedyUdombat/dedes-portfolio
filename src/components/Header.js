import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

import '../assets/stylesheet/header.css';

// import Logo from '../assets/images/Logo.png';

class Header extends Component {
  render() {

    return (
      <header id="home">
      <ParticlesBg type="thick" bg={true} num={10}  />
      <nav id="nav-wrap">
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
           {/* <img src={Logo} class="logo" alt="Nnamdi's Logo" /> */}
            <h1 className="responsive-headline">Hi, I am glad you found your way here :) </h1>
            <h3>Hi, I am Nnamdi Okafor. I am a 24-year-Old Growth Marketer.  I currently work at Bundle Africa as a Growth Analyst</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
