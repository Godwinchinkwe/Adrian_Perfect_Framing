import React from 'react'
import "./Footer.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import apf_logo from "../Assets/copylogo.jpg"
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'

const Footer = () => {
  
  const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={apf_logo} alt=""  onClick={() =>  navigate('/')}/>
        </div>

        <ul className='footer-links'>
           <Link onClick={scrollToTop} to="contact/"><li className='ftlnk'> Company </li></Link>
           <Link onClick={scrollToTop} to="services/"><li>Services</li></Link>
           <Link onClick={scrollToTop} to="about/"><li>About</li></Link>
           <Link onClick={scrollToTop} to="gallery/"><li>Product</li></Link>
           <Link onClick={scrollToTop} to="termsandcondition/"><li>Terms & Condition</li></Link>
           <Link onClick={scrollToTop} to="privacypolicy/"><li>Privacy Policy</li></Link>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
              <FaTiktok fontSize={"25px"} />
            </div>
            <div className='footer-icons-container'>
              <FaFacebook fontSize={"25px"} />
            </div>
            <div className='footer-icons-container'>
              <FaInstagram fontSize={"25px"} />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>copyright @ 2024 All Right Reserved. </p>
        </div>
    </div>
  )
}

export default Footer