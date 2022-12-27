import React from 'react'
import thinker from "../../assets/thinker.jpg"
import Team from "../../assets/Team-and-group.png"
import Self from "../../assets/Self_motivated.png"


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            {/* <i class="uil uil-airplay"></i> */}
            <img className="about_img" src={thinker} alt="Image"/>
            <br/>
            <span className="about__subtitle">Out of the Box thinker</span>
        </div>

        <div className="about__box">
            {/* <i class="uil uil-airplay"></i> */}
            <img className="about_img" src={Self} alt="Image"/>
            <br/>
            <span className="about__subtitle">Self-Motivated</span>
        </div>

        <div className="about__box">
            {/* <i class="uil uil-airplay"></i> */}
            <img className="about_img" src={Team} alt="Image"/>
            <br/>
            <span className="about__subtitle">A Team Player</span>
        </div>

    </div>
  )
}

export default Info
