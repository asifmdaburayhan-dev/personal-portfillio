import React from 'react'
import './About.css'
import Working from '../assets/Working.png'

const About = () => {
  return (
    <div className="About">
      <div className="about">
        <h1 className="about-header">About Me</h1>
        <p>
            Hello! I'm MD Abu Rayhan Asif, a Computer Science and Technology student 
            with a strong passion for Web Development and modern technologies.
            I enjoy creating responsive, user-friendly, and visually appealing 
            websites. Currently, I am learning React.js and exploring modern frontend 
            development technologies to improve my programming skills.My goal is to 
            become a professional MERN Stack Developer and build innovative web 
            applications that solve real-world problems. I believe in continuous 
            learning, problem-solving, and improving my skills through practical 
            projects and hands-on experience.I'm always excited to learn new technologies 
            and take on new challenges.
        </p>
      </div>

      <img src={Working} alt="Working Computer" className="w-140 h-100 rounded-2xl" />

      
    </div>
  )
}

export default About
