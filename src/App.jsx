import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {


  return (
    <>

      <Navbar />
      <Home />
       <hr className="my-5 text-white" />
      <AboutMe />
       <hr className="my-10 text-white" />
      <Projects />
       <hr className="my-10 text-white" />
      <Contact />



    </>
  )
}

export default App
