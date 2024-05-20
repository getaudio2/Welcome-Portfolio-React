import React from 'react'
import './Profile.css'
import ME from '../assets/miFoto.jpg'

const Profile = () => {
  return (
    <section id='profile'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container profile__container'>
        <div className='profile-image'>
          <img src={ME} alt="About Me" />
        </div>
        <div className='profile__content'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Profile