import React from 'react'
import "./Footer.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import apf_logo from "../Assets/apf_logo.png"
// import instagram_icon from "../Assets/instagram_icon.png"
// import pintester_icon from "../Assets/pintester_icon.png"
// import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={apf_logo} alt=""/>
            <p>APF</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Services</li>
            <li>Terms & Condition</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Privacy Policy</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
              <FaTiktok fontSize={"30px"} />
            </div>
            <div className='footer-icons-container'>
              <FaFacebook fontSize={"30px"} />
            </div>
            <div className='footer-icons-container'>
              <FaInstagram fontSize={"30px"} />
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