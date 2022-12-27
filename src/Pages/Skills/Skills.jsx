import React from 'react'
import "./Skills.css"
import Frountend from './Frountend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__container container grid">
        <Frountend/>
        <Backend/>
      </div>
    </section>
  )
}

export default Skills