import React from 'react'
import '../Style-sheets/Navbar.css'
import logo from '../images/logo.png'
import sound from '../images/sound.png'
import ham from '../images/ham.png'

export default function Navbar() {
  return (
    <nav className='nav-container'>
      <div className='nav-left-container'><img src={logo} alt="logo"/></div>
      <div className="nav-right-container">
        <button  className=' nav-btn'>Connect to a wallet</button>
        <img src={sound} alt="sound" className='nav-items-sound '/>
        <img src={ham} alt="ham" className='nav-items-ham' />
      </div>
    </nav>
  )
}
