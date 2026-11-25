
import React from 'react'
import './Contact.css'
import Email from '../assets/Email.png'
import Phone from '../assets/Phone.png'

const Contact = () => {
  return (
    <div className="contact">

      <div className="contact-heading">
        <span className="contact-badge">
          Get In Touch
        </span>

        <h1 className="contactheader">
          Contact <span>Me</span>
        </h1>

        <p>
          Have a project or an idea? Feel free to contact me.
          I would love to hear from you.
        </p>
      </div>

      <div className="contacts">

        <a
          href="mailto:asifmdaburayhan@gmail.com"
          className="contact-card contactfirst"
        >
          <div className="contact-icon">
            <img src={Email} alt="Email" className="imageone" />
          </div>

          <div className="contact-info">
            <h3>Email Address</h3>
            <p>asifmdaburayhan@gmail.com</p>
          </div>

        </a>

        <a
          href="tel:01731471431"
          className="contact-card contactsecond"
        >
          <div className="contact-icon">
            <img src={Phone} alt="Phone" className="imagesecond" />
          </div>

          <div className="contact-info">
            <h3>Phone Number</h3>
            <p>01731471431</p>
          </div>

        </a>

      </div>

    </div>
  )
}

export default Contact
