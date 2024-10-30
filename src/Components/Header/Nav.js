import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

function Nav() {

  let activeStyle = {
    textDecoration: "underline",
    fontSize:"19px",
    color:"#e11e25",
    fontWeight:"700" 
  };


  return (
    <div class="navmain">
       <NavLink to="/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Home</p></NavLink>

        <NavLink to="Services/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Services</p></NavLink>
        
        <NavLink to="Gallery/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Product</p></NavLink>

        <NavLink to="About/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> About Us</p></NavLink>

        <NavLink to="Contact/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Contact Us</p></NavLink>

        <NavLink to="Faq/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> FAQ</p></NavLink>

    </div>
  )
}

export default Nav
