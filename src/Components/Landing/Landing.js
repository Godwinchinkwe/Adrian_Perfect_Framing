import React from 'react'
import "./Landing.css"
import tent1 from "../Assets/wall frame.jpg"
import tent2 from "../Assets/table frame cut.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"

const Landing = () => {
  const navigate = useNavigate();

    return (
        <div>
        <div class="cantainer">
          <div class="cantainer__left">
            <h1>Adrian Perfect Framing Limited</h1>
           
            <p> Adrian Perfect Framing Limited is a professional manufacturer of sublimation MDF photo blocks and frames in Nigeria.</p><br></br>
            <div class="cantainer__btn">
              <button class="btn" onClick={() =>  navigate('about/')}>BOOK NOW</button>
            </div>
          </div>
          <div class="cantainer__right">
            <div class="images">
              <img src={tent1} alt="tent-1" class="tent-1" />
              <img src={tent2} alt="tent-2" class="tent-2" />
            </div>
            <div class="contentx">
              <h4>12m2 | 2 Frames</h4>
              <h2>BASIC TENT</h2>
              <h3>Your Framing Experience</h3>
              <p>
              Adrian Perfect Framing Limited is a professional manufacturer of sublimation MDF photo blocks and frames in Nigeria, with over 2 years of development and 8 years of expertise in the photo framing industry. We specialize in customized frames in various designs and shapes, catering to diverse customer requirements.
    
              </p>
            </div>
          </div>
          <div class="location" onClick={() =>  navigate('contact/')}>
            <span><FaLocationDot /></span>
            OUR LOCATION
          </div>
          <div class="socials">
            <span>
            <FaFacebook />
            </span>
            <span>
            <FaInstagramSquare />
            </span>
            <span>
            <FaXTwitter />
            </span>
          </div>
        </div>
    
        </div>
      )
}

export default Landing