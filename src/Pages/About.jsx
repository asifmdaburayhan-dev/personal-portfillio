
import React from 'react'
import './About.css'
import Working from '../assets/Working.png'

const About = () => {
  return (
    <div className="About">

      <div className="about">

        <span className="about-badge">
          Get To Know Me
        </span>

        <h1 className="about-header">
          About <span>Me</span>
        </h1>

        <p className="about-description">
          Hello! I'm MD Abu Rayhan Asif, a Computer Science
          and Technology student with a strong passion for
          Web Development and modern technologies.

          I enjoy creating responsive, user-friendly, and
          visually appealing websites. Currently, I am learning
          React.js and exploring modern frontend development
          technologies to improve my programming skills.

          My goal is to become a professional MERN Stack
          Developer and build innovative web applications
          that solve real-world problems.

          I believe in continuous learning, problem-solving,
          and improving my skills through practical projects
          and hands-on experience.
        </p>

        <div className="about-details">

          <div className="about-detail-card">
            <h3>Education</h3>
            <p>Computer Science & Technology</p>
          </div>

          <div className="about-detail-card">
            <h3>Currently Learning</h3>
            <p>React.js & Modern Web Development</p>
          </div>

          <div className="about-detail-card">
            <h3>Career Goal</h3>
            <p>MERN Stack Developer</p>
          </div>

        </div>

        <a href="/Contact" className="about-btn">
          Let's Connect
        </a>

      </div>

      <div className="about-image-wrapper">

        <img
          src={Working}
          alt="Working on Web Development"
          className="about-img"
        />

        <div className="about-image-caption">
          <h3>Learning & Building</h3>
          <p>Turning ideas into reality through code.</p>
        </div>

      </div>

    </div>
  )
}

export default About
