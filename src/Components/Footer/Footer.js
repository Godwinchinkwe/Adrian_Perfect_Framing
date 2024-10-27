import React from 'react'
import "./Footer.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import apf_logo from "../Assets/copylogo.jpg"
import {useNavigate} from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={apf_logo} alt=""/>
        </div>

        <ul className='footer-links'>
            <li onClick={() =>  navigate('contact/')}>Company</li>
            <li onClick={() =>  navigate('services/')}>Services</li>
            <li onClick={() =>  navigate('about/')}> About</li>
            <li onClick={() =>  navigate('termsandcondition/')}>Terms & Condition</li>
            <li onClick={() =>  navigate('gallery/')}>Products</li>
            <li onClick={() =>  navigate('contact/')}>Offices</li>
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