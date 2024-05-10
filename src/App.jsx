import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Profile />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App