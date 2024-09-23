import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrowicon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="usd">EUR</option>
                <option value="usd">NGN</option>
            </select>
            <button>
                Sign Up
                <img src={arrowicon} alt="" />
            </button>
        </div>

    </div>
  )
}

export default Navbar