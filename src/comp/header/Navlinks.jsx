import React from 'react'
import {Link} from 'react-router-dom'

const Navlinks = () => {
  return (
    <div className="nav__menu">
        <ul className="nav__list grid">
             <li className="nav__item">
              <i class="uil uil-estate"></i><Link to="/">Home</Link>
             </li>
             <li className="nav__item">
              <i class="uil uil-user"></i><Link to="/About">About</Link>
             </li>
             <li className="nav__item">
              <i class="uil uil-file-alt"></i><Link to="/Skills">Skills</Link>
             </li>
             <li className="nav__item">
              <i class="uil uil-scenery"></i><Link to="/Projects">Projects</Link>
             </li>
             <li className="nav__item">
              <i class="uil uil-message"></i><Link to="/Contact">Contact</Link>
             </li>
        </ul>
        <i class="uil uil-times"></i>
    </div>
  )
}

export default Navlinks
