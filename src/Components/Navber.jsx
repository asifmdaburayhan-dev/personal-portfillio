
import React from 'react'
import './Navber.css'
import Portfollio from '../assets/Portfollio.png'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <div className="navber">
      <nav>

        <img src={Portfollio} alt="" className="navberimage"/>
        {/* <h2 className="font-bold text-2xl">
          Portfolio
        </h2> */}

        <div className="navber-link">

          <NavLink to="/" end className={({ isActive }) =>
              `hover:bg-purple-500 hover:text-white hover:font-semibold pl-2 pr-2 
                pt-1 pb-1 rounded-xl ${ isActive ? 'bg-purple-600 text-white' : ''}`}>
                Home 
            </NavLink>

          <NavLink to="/About" className={({ isActive }) =>
              `hover:bg-purple-500 hover:text-white hover:font-semibold pl-2 pr-2 
                pt-1 pb-1 rounded-xl ${ isActive ? 'bg-purple-600 text-white' : ''}`}>
                About
          </NavLink>

          <NavLink to="/Skills" className={({ isActive }) =>
              `hover:bg-purple-500 hover:text-white hover:font-semibold pl-2 pr-2 
                pt-1 pb-1 rounded-xl ${ isActive ? 'bg-purple-600 text-white' : ''}`}>
                Skills
          </NavLink>

          <NavLink to="/Project" className={({ isActive }) =>
              `hover:bg-purple-500 hover:text-white hover:font-semibold pl-2 pr-2 
                pt-1 pb-1 rounded-xl ${ isActive ? 'bg-purple-600 text-white' : ''}`}>
                Project
          </NavLink>

          <NavLink to="/Contact" className={({ isActive }) =>
              `hover:bg-purple-500 hover:text-white hover:font-semibold pl-2 pr-2 
                pt-1 pb-1 rounded-xl ${ isActive ? 'bg-purple-600 text-white' : ''}`}>
                Contact
          </NavLink>

        </div>
      </nav>
    </div>
  )
}

export default Navber
