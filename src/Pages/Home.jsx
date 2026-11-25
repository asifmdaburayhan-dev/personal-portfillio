import React from 'react'
import './Home.css'
import Homes from '../assets/Homes.png'

const Home = () => {
  return (
    <div className="home">

        <img src={Homes} alt="My-Photo" className="home-img"/>

      <div className="home2">
        <h1 className="home-heading">
        Welcome to my Project
      </h1>

        
        <p className="home-pragraph">
            Hello! I am a MERN Stack Developer. I learning HTML, CSS, 
            JS, React JS, Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default Home
