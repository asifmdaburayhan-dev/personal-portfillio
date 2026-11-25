import React from 'react'
import './Project.css'
import Working from '../assets/Working.png'

const Project = () => {
  return (
    <div className="project">
      <div className="projectsecond">
        <img src={Working} alt="Portfollio Website" className="w-140 h-100 rounded-2xl"/>
        <div className="projectfour">
            <h1 className=" projectheader text-3xl font-bold">Personal Portfollio Website</h1>
        
            <p>
                A modern and responsive Personal Portfolio Website built with React.js, 
                CSS and Tailwind CSS. This website showcases my personal introduction, 
                technical skills, projects, and contact information. It is designed with a clean 
                and user-friendly interface to highlight my development journey, demonstrate 
                my abilities, and help potential clients or recruiters explore my work.
            </p>
        </div>
      </div>

       <div className="projectthird">
        <h2 className=" header ">Technologies</h2>

        <ul className="projectul">
         <li>React JS </li>
         <li>React Router DOM</li>
         <li>HTML5</li>
         <li>CSS3</li>
         <li>Tailwind CSS</li>
         <li>JavaScript</li>
        </ul>

       </div>
        
    </div>
  )
}

export default Project
