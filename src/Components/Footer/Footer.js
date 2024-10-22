import React from 'react'
import "./Footer.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import apf_logo from "../Assets/copylogo.jpg"
import {useNavigate} from "react-router-dom"
// import instagram_icon from "../Assets/instagram_icon.png"
// import pintester_icon from "../Assets/pintester_icon.png"
// import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={apf_logo} alt=""/>
            {/* <p>APF</p>  */}
        </div>
        <ul className='footer-links'>
            <li >Company</li>
            <li>Services</li>
            <li>FAQ</li>
            <li>Terms & Condition</li>
            <li>Products</li>
            <li>Offices</li>
            <li onClick={() =>  navigate('privacypolicy/')}>Privacy Policy</li>
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