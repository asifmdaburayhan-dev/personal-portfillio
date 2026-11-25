
import React from 'react'
import './Project.css'
import Working from '../assets/Working.png'

const Project = () => {
  return (
    <div className="project">

      {/* Project Heading */}

      <div className="project-heading">
        <span className="project-badge">
          My Recent Work
        </span>

        <h1 className="project-main-heading">
          My <span>Projects</span>
        </h1>

        <p>
          Here are some of the projects I have built
          while learning and improving my development skills.
        </p>
      </div>

      {/* Project Card */}

      <div className="project-card">

        <div className="projectsecond">

          <div className="project-image-wrapper">
            <img
              src={Working}
              alt="Personal Portfolio Website"
              className="project-img"
            />
          </div>

          <div className="projectfour">

            <span className="project-number">
              PROJECT 01
            </span>

            <h2 className="projectheader">
              Personal Portfolio Website
            </h2>

            <p className="project-description">
              A modern and responsive Personal Portfolio Website
              built with React.js, CSS and Tailwind CSS. This
              website showcases my personal introduction,
              technical skills, projects, and contact information.
              It is designed with a clean and user-friendly
              interface to highlight my development journey,
              demonstrate my abilities, and help potential
              clients or recruiters explore my work.
            </p>

            {/* Technologies */}

            <div className="projectthird">

              <h3 className="header">
                Technologies Used
              </h3>

              <ul className="projectul">
                <li>React JS</li>
                <li>React Router DOM</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>

            </div>

            {/* Project Features */}

            <div className="project-features">
              <h3>Key Features</h3>

              <ul>
                <li>Responsive Website Design</li>
                <li>Multiple Pages Navigation</li>
                <li>Modern User Interface</li>
                <li>Contact Information Section</li>
              </ul>
            </div>

            <span className="project-status">
              Personal Learning Project
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Project
