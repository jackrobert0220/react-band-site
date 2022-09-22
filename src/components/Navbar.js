import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "../assets/logo.png"

import './NavbarStyles.css'

const Navbar = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <Link to='/'><img className='logo' src={logo} alt="Plastic Rhino Band's Official Logo" /></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/music'>Music</Link>
        </li>
        <li>
          <Link to='/videos'>Videos</Link>
        </li>
        <li>
          <Link to='/shows'>Shows</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
      {click ? (<FaTimes size ={30} style={{color: '#fff'}} />) : (<FaBars size ={30} style={{color: '#fff'}} />)}
      </div>
    </div>
  )
}

export default Navbar