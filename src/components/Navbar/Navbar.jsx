import React, { useState } from 'react'
import './navbar.scss'
import logo from'../../../public/Estate.jpg'
import menu from '../../../public/menu.png'
import close from '../../../public/cross.png'
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav>
        <div className='left'>
            <a className='titleLogo' href="/"><img className='logo' src={logo} alt="logo" /><span className='company'>DobbyEstate</span></a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
        </div>
        <div className='right'>
            <a href="/login">Log in</a>
            <a className='register' href="/logout">Register</a>
            <div className='menu-icon'>
              <img className='menu-img' onClick={()=>setOpen(!open)} src={open ? close : menu} alt="menu-bar" />
            </div>
            <div className={open?'active-menu':'slide-menu'}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Login</a>
            <a href="/">Register</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar