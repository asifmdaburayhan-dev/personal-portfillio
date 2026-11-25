import React from 'react'
import './Contact.css'
import Email from '../assets/Email.png'
import Phone from '../assets/Phone.png'

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactheader">
        Contact Me
      </h1>
        <div className="contacts">
            <div className="contactfirst">
              <img src={Email} alt="" className="imageone"/>
              asifmdaburayhan@gmail.com
            </div>

            <div className="contactsecond">
              <img src={Phone} alt="" className="imagesecond"/>
              01731471431
            </div>
        </div>
    </div>
  )
}

export default Contact
