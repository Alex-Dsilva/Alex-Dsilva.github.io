import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
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
