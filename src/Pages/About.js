import React from 'react'
import "./CSS/About.css"
import bout from "../Components/Assets/bout us.jpg"
import mission from "../Components/Assets/ouur mission.jpg"
// import {useNavigate} from "react-router-dom"
// import { NavLink } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate();
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
            {/* <NavLink to="Contact/"> <button className='about-cta-button'> Contact us</button> </NavLink> */}
            {/* <button className='about-cta-button'> Contact us</button> */}
          </div>
          <div className='about-hero-image'>
            <img src={bout} alt='' />
          </div>
        </div>

      </section>
       
      <section className='about_us'>
        <div className='about-heading'>
          <h1>Our Mission</h1>
        </div>
        <div className='about-containerxy'>
          <div className='about-hero-image'>
            <div className='about-hero-content'>
             <img src={mission} alt='' />
            </div>
          </div>
          <div className='about-hero-content'>
            <h2> Our Vision, Our Passion.</h2>
            <p>To deliver exceptional quality, customized photo frames and blocks that exceed customer expectations, while maintaining a reputation for excellence and commitment to customer satisfaction.
            </p>
            <button className='about-cta-button'> Contact us</button>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default About