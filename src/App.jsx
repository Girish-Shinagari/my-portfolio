import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <>

      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />



    </>
  )
}

export default App
