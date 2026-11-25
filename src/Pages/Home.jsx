
import React from 'react'
import './Home.css'
import Homes from '../assets/Homes.png'

const Home = () => {
  return (
    <div className="home">

      <div className="home2">

        <span className="home-badge">
          Welcome to my Portfolio
        </span>

        <h1 className="home-heading">
          Hello, I'm <span>MD Abu Rayhan Asif</span>
        </h1>

        <h2 className="home-subheading">
          MERN Stack Developer
        </h2>

        <p className="home-pragraph">
          I am passionate about web development.
          Currently, I am learning HTML, CSS, JavaScript,
          React JS and Tailwind CSS to build modern
          and responsive websites.
        </p>

        <div className="home-buttons">
          <a href="/Project" className="home-btn primary-btn">
            View My Projects
          </a>

          <a href="/Contact" className="home-btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="home-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

      </div>

      <div className="home-image-wrapper">
        <img
          src={Homes}
          alt="My Profile"
          className="home-img"
        />
      </div>

    </div>
  )
}

export default Home 
