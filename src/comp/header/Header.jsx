import React from 'react'
import "./header.css"
import Logo from "../../assets/LOGO.png"
import {Link} from 'react-router-dom'
import Navlinks from './Navlinks'


const Header = () => {
    const logo=" < 👋 I am Alex / > "
  return (
    <header className='header'>
        <nav className="nav container">
            <Link to="/About" className="nav__logo">
                <div className="typed-out"><img src={Logo} className="slide" alt={"logo"}/></div>
            </Link>

            <Navlinks/>
            
        </nav>
      
    </header>
  )
}

export default Header

