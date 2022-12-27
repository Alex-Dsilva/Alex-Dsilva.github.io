import React from 'react'
import "./Home.css"
import Social from './Social'
import Data from './Data'
// import ParticleBackground from "./BG"


const Home = () => {

  return (
    <section  className="home section" id="home"   >
      {/* <ParticleBackground/> */}
      <div className="home__container container grid">
        <div className="home__content grid">
            <Social/>

            <div id="homeimg">
            </div>
            <Data/>
        </div>
      </div>
    </section>
  )
}

export default Home
