import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Navber from './Components/Navber'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber/>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/About" element={<About/>}/>
        <Route path= "/Skills" element={<Skills/>}/>
        <Route path= "/Project" element={<Project/>}/>
        <Route path= "/Contact" element={<Contact/>}/>
        
      </Routes>

      <Footer/>

    </>
  )
}

export default App
