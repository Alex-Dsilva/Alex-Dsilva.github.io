import {Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import {Projects} from "./Projects/Projects"
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import React from 'react'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes
