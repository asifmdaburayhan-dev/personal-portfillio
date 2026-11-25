
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h1 className="footerheader">
          MD Abu Rayhan Asif
        </h1>

        <p className="footerp">
          Web Developer | Building Creative Digital Experiences
        </p>

        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:asifmdaburayhan@gmail.com">
            Email
          </a>
        </div>

        <a href="#" className="footer-top">
          Back to Top ↑
        </a>

      </div>

      <hr className="footer-line"/>

      <p className="footeror">
        © 2026 MD Abu Rayhan Asif. All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer
