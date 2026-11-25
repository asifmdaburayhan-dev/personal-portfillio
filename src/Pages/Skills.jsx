import React from 'react'
import './Skills.css'
import Computer from '../assets/Computer.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JavaScript.png'
import ReactJS from '../assets/ReactJS.png'
import Tailwind from '../assets/Tailwind.jpg'

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-header">
        My Skills
      </h1>

      <ul>
       
        <li>
            <img src={Computer} alt="" className="ALLIMAGE"/>
            Basic Computer
        </li>
        
        <li>
            <img src={HTML} alt="" className="ALLIMAGE"/>
            HTML
        </li>

        <li>
            <img src={CSS} alt="" className="ALLIMAGE"/>
            CSS
        </li>

        <li>
            <img src={JavaScript} alt="" className="ALLIMAGE"/>
            JavaScript
        </li>

        <li>
            <img src={ReactJS} alt="" className="ALLIMAGE"/>
            React JS
        </li>

        <li>
            <img src={Tailwind} alt="" className="ALLIMAGE"/>
            Tailwind CSS
        </li>

      </ul>
    </div>
  )
}

export default Skills
