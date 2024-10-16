import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

function Nav() {

  let activeStyle = {
    textDecoration: "underline",
    fontSize:"19px",
    color:"gold",
    fontWeight:"800" 
  };


  return (
    <div class="navmain">

<NavLink to="Services/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Services</p></NavLink>
        
        <NavLink to="Product/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Product</p></NavLink>

        <NavLink to="About/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> About Us</p></NavLink>

        <NavLink to="Contact/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Contact Us</p></NavLink>

    </div>
  )
}

export default Nav
