import React from 'react'
import './Home.css'
import CV from '../assets/CV Paúl Maigua S_v03.pdf'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm Paúl Maigua</h5>
            <h5 className="text-light">Software Developer</h5>
        </div>
        <div className="cv">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
        <div className="header__socials">
          <a href="https://www.linkedin.com/in/paúl-gerard-maigua-sarango-342896206/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/getaudio2" target="_blank"><FaGithub /></a>
        </div>
    </header>
  )
}

export default Home