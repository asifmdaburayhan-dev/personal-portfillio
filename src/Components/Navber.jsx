
import React, { useState } from 'react'
import './Navber.css'
import Portfollio from '../assets/Portfollio.png'
import { NavLink } from 'react-router-dom'

const Navber = ({ isDark, onToggleTheme }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active' : ''}`

  return (
    <div className="navber">
      <nav className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="navber-logo" onClick={closeMenu}>
          <img
            src={Portfollio}
            alt="Portfolio Logo"
            className="navberimage"
          />
          <span>Portfolio</span>
        </NavLink>

        {/* Navigation Links */}
        <div className={`navber-link ${menuOpen ? 'show-menu' : ''}`}>

          <NavLink to="/" end className={navClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/About" className={navClass} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/Skills" className={navClass} onClick={closeMenu}>
            Skills
          </NavLink>

          <NavLink to="/Project" className={navClass} onClick={closeMenu}>
            Project
          </NavLink>

          <NavLink to="/Contact" className={navClass} onClick={closeMenu}>
            Contact
          </NavLink>

        </div>

        {/* Theme and Mobile Buttons */}
        <div className="navbar-actions">

          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>

      </nav>
    </div>
  )
}

export default Navber
