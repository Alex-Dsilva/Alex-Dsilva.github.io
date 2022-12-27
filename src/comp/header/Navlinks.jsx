import React from 'react'
import {Link} from 'react-router-dom'
import CV from "../../assets/Alex_Dislva.pdf"
import {VscFilePdf} from "react-icons/vsc"
import "./Navlinks.css"

const Navlinks = ({toggle, onClick}) => {
  return (
    <div className={toggle? "nav__menu show-menu":"nav__menu"}>
        <ul className="nav__list grid">
             <li className="nav__item">
                <Link to="/" className="nav__link" onClick={onClick} >
                  <i className="uil uil-estate nav__icon"></i>Home
                </Link>
             </li>
             <li className="nav__item">
                <Link to="/About" className="nav__link" onClick={onClick} >
                  <i className="uil uil-user nav__icon"></i>About
                </Link>
             </li>
             <li className="nav__item">
                <Link to="/Skills" className="nav__link" onClick={onClick} >
                 <i className="uil uil-file-alt nav__icon"></i>Skills
                </Link>
             </li>
             <li className="nav__item bot">
                <Link to="/Projects" className="nav__link" onClick={onClick} >
                 <i className="uil uil-scenery nav__icon"></i>Projects
                </Link>
             </li>
             <li className="nav__item bot">
                <Link to="/Contact" className="nav__link" onClick={onClick} >
                  <i className="uil uil-message nav__icon"></i>Contact
                </Link>
             </li>
             <li className="nav__item bot">
             <a download="" href={CV} className="nav__link">
             <i className="uil nav__icon"><VscFilePdf/></i>
             
              Resume
            </a>
             </li>

        </ul>
        <i className="uil uil-times nav__close" onClick={onClick}></i>
    </div>
  )
}


export default Navlinks
