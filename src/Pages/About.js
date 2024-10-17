import React from 'react'
import "./CSS/About.css"
import bout from "../Components/Assets/bout us.jpg"

const About = () => {
  return (
    <div>
      <section className='about_us'>
        <div className='about-heading'>
          <h1>About Us</h1>

        </div>
        <div className='about-container'>
          <div className='about-hero-content'>
            <h2> Welcome to Our website</h2>
            <p>At Adrian Perfect Framing Limited, we take pride in creating distinctive and superior picture frames that cater to your precise requirements. Our team of passionate craftsmen, combined with our state-of-the-art facilities, ensures that every product meets our high standards of quality and excellence. </p>
            <button className='about-cta-button'> Contact us</button>
          </div>
          <div className='about-hero-image'>
            <img src={bout} alt='' />
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default About