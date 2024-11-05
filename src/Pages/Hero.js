// import React, { useState, useEffect } from 'react';
import React from 'react'

import Landing from '../Components/Landing/Landing'
import Carousel from '../Components/Carousel/Carousel'
import Popular from "../Components/Popular/Popular"
import Experience from "../Components/Experience/Experience"
import "./CSS/Hero.css"
// import Testimonials from '../Components/Testimonials/Testimonials'
// import Pricing from '../Components/Pricing/Pricing'


const Hero = () => {
  // const [isPromptVisible, setIsPromptVisible] = useState(false);

  // useEffect(() => {
  //   setIsPromptVisible(true);
  // }, []);

  // const closePrompt = () => {
  //   setIsPromptVisible(false);
  // };

// const modalStyle = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const modalContentStyle = {
//   backgroundColor: 'white',
//   padding: '20px',
//   borderRadius: '8px',
//   textAlign: 'center',
// };

  return (
    <div className='hero-landing-page'>


       {/* <div className='promptdata'>
      {isPromptVisible && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Hello!</h2>
            <p>This is a prompt that appears when you open the homepage.</p>
            <button onClick={closePrompt}>Close</button>
          </div>
        </div>
      )}
    </div> */}

      <Landing />
      <Popular />
      <section className='about_us'>
        <div className='about-heading'>
          <h1>Why Choose Us</h1>
        </div>
        <div className='about-container'>
          <div className='ahbout-hero-content'>
            <h2> Our Values</h2>
            <ul>
              <li>High-quality materials and craftsmanship </li>
              <li>Strict delivery schedule </li>
              <li> Competitive pricing </li>
              <li>Strong technical force and well-equipped testing facilities </li>
              <li>Guild Commended Framer with highly trained craftsmen </li>
              <li> Over 8 years of industry expertise </li>
            </ul>
        
            {/* <button className='about-cta-button'> Contact us</button> */}
          </div>
          <div className='ahbout-hero-content'>
            <h2>Products</h2>
            <ol>
              <li>High-quality materials and craftsmanship </li>
              <li>Strict delivery schedule </li>
              <li> Competitive pricing </li>
            </ol> 
            <br/>
           
            <h2>Facilities and Capacity </h2>
            <ul>
              <li>High-quality materials and craftsmanship </li>
              <li>Strict delivery schedule </li>
              <li> Competitive pricing </li>
            </ul>
          </div>
         
        </div>
        {/* <Testimonials /> */}

      </section> 

      <Experience />
      <Carousel/>
      {/* <Pricing /> */}

    </div>
  )
}

export default Hero

