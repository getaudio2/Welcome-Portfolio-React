import React from 'react'
import './Home.css'
import CV from '../assets/CV Paúl Maigua S_v03.pdf'

const Home = () => {
  return (
    <section className="banner" id="home">
        <div className="container header_container">
            <h5>Hello I'm Paúl Maigua</h5>
            <h5 className="text-light">Software Developer</h5>
        </div>
        <div className="cv">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
    </section>
  )
}

export default Home