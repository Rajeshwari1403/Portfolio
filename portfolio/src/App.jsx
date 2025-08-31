import React from 'react'
import NavBar from './components/NavBar'
import Hero from './section/Hero'
import TechProficiency from './section/TechProficiency'
import AboutMe from './section/AboutMe'
import MyProjects from './section/MyProjects'
import ContactMe from './section/ContactMe'
import Certificates from './section/Certificates'

const App = () => {
  return (
    <div className='mb-40'>
      <NavBar />
      <Hero />
      <TechProficiency />
      <AboutMe />
      <MyProjects />
      <Certificates />
      <ContactMe />
    </div>
  )
}

export default App;