import React from 'react'
import { Link } from "react-scroll";
import CV from "../../assets/Alex_Dislva.pdf"
import {VscFilePdf} from "react-icons/vsc"
import "./Navlinks.css"

const Navlinks = ({toggle, onClick}) => {

  const handleClick = async () => {
    try {
      const a = document.createElement('a');
      a.href = "https://drive.google.com/file/d/1nbCr0hdnBhnV73MI3uxRCpw1yq-uBtfE/view";
      // a.download = 'Alex_Resume.pdf';
      a.target="_blank"
      a.click();

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={toggle? "nav__menu show-menu":"nav__menu"}>
        <ul className="nav__list grid">
             <li className="nav__item">
                <Link className="nav__link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={onClick} >
                  <i className="uil uil-estate nav__icon"></i>Home
                </Link>
             </li>
             <li className="nav__item">
                <Link  className="nav__link" activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={onClick} >
                  <i className="uil uil-user nav__icon"></i>About
                </Link>
             </li>
             <li className="nav__item">
                <Link  className="nav__link" activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={onClick} >
                 <i className="uil uil-file-alt nav__icon"></i>Skills
                </Link>
             </li>
             <li className="nav__item bot">
                <Link  className="nav__link" activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={onClick} >
                 <i className="uil uil-scenery nav__icon"></i>Projects
                </Link>
             </li>
             <li className="nav__item bot">
                <Link  className="nav__link" activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
                onClick={onClick} >
                  <i className="uil uil-message nav__icon"></i>Contact
                </Link>
             </li>
             <li className="nav__item bot">
             <a download="Alex_Resume.pdf" href={CV} onClick={handleClick} className="nav__link">
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
