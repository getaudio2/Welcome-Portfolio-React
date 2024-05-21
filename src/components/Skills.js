import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container skills__container'>
        <div className='skills__frontend'>
        <h3>Frontend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='skills__details'>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='skills__details'>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='skills__details'>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className='skills__backend'>
        <h3>Backend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <h4>Java Spring</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='skills__details'>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='skills__details'>
              <h4>Python OpenCV</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='skills__details'>
              <h4>C# ASP .NET Core</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
      <div className='container languages__container'>
        <div className='languages'>
        <h3>Languages</h3>
          <div className='languages__content'>
            <article className='languages__details'>
              <h4>Spanish</h4>
              <small className='text-light'>Native</small>
            </article>
            <article className='languages__details'>
              <h4>Catalan</h4>
              <small className='text-light'>Native</small>
            </article>
            <article className='languages__details'>
              <h4>English</h4>
              <small className='text-light'>Advanced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills