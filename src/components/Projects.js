import React from 'react'
import './Projects.css'
import IMG1 from '../assets/portfolio1.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <div className='image-div' color='red'></div>
          </div>
          <h3>Portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects