
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

      {/* Skills Heading */}

      <div className="skills-heading">
        <span className="skills-badge">
          My Technical Expertise
        </span>

        <h1 className="skills-header">
          My <span>Skills</span>
        </h1>

        <p>
          Technologies and tools I am learning
          to build modern and responsive websites.
        </p>
      </div>

      {/* Basic Computer */}

      <div className="skills-category">

        <h2 className="skills-subheading">
          Basic Computer Skills
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-image">
              <img src={Computer} alt="Basic Computer" className="ALLIMAGE"/>
            </div>

            <h3>Basic Computer</h3>
            <p>Computer Fundamentals</p>
          </div>

        </div>

      </div>

      {/* Frontend Development */}

      <div className="skills-category">

        <h2 className="skills-subheading">
          Frontend Development
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-image">
              <img src={HTML} alt="HTML" className="ALLIMAGE"/>
            </div>

            <h3>HTML</h3>
            <p>Web Structure</p>
          </div>

          <div className="skill-card">
            <div className="skill-image">
              <img src={CSS} alt="CSS" className="ALLIMAGE"/>
            </div>

            <h3>CSS</h3>
            <p>Web Styling</p>
          </div>

          <div className="skill-card">
            <div className="skill-image">
              <img src={JavaScript} alt="JavaScript" className="ALLIMAGE"/>
            </div>

            <h3>JavaScript</h3>
            <p>Programming Language</p>
          </div>

          <div className="skill-card">
            <div className="skill-image">
              <img src={ReactJS} alt="React JS" className="ALLIMAGE"/>
            </div>

            <h3>React JS</h3>
            <p>Frontend Library</p>
          </div>

          <div className="skill-card">
            <div className="skill-image">
              <img src={Tailwind} alt="Tailwind CSS" className="ALLIMAGE"/>
            </div>

            <h3>Tailwind CSS</h3>
            <p>CSS Framework</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Skills
