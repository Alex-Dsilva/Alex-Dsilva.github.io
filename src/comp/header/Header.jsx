import React, { useState } from 'react'
import "./header.css"
import Logo from "../../assets/Logo_lightmode.png"
import { Link } from "react-scroll";
import Navlinks from './Navlinks'


const Header = () => {
    const logo=" < 👋 I am Alex / > "

    const [Toggle, showMenu] = useState(false);

    const handleClick=()=>{
      showMenu(!Toggle)
    }
  return (
    <header className='header'>
        <nav className="nav container" id='nav'>
            <Link to="About" 
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleClick} className="nav__logo">
                <div className="typed-out"><img src={Logo} className="slide" alt={"logo"}/></div>
            </Link>
            
            <Navlinks toggle={Toggle} onClick={handleClick}/>
            <div className="nav__toggle" onClick={handleClick}>
             <i className="uil uil-apps"></i>
            </div>
        </nav>
      
    </header>
  )
}

export default Header

