import React, {useState} from 'react'
import "./Header.css"
import Nav from './Nav'
import {ImMenu3  } from 'react-icons/im'
import {FaTimes} from 'react-icons/fa'
// import {BiLogoUnsplash} from 'react-icons/bi'
import {useNavigate} from "react-router-dom"
import Dropdown from "./Falldown"
import apf_logo from "../Assets/apf_logo.png"

function Header() {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handlechange = () => { 
    setToggle(!toggle) 
  }
  // const {props} = prop 

  return (
    <div class="main_header">
      <div class="header_wrap">
    {/* <BiLogoUnsplash fontSize={"45px"} onClick={() =>  navigate('/')} /> */}
    <img src={apf_logo} alt="" className="afrlogo" onClick={() =>  navigate('/')} />
    <Nav />

    {/* <a target="_blank" rel="noreferrer" href="https://github.com/Godwinchinkwe">
    <button class="but" > Github profile</button>
  </a> */}


    <div class="burger">
    {toggle ? <FaTimes fontSize={"25px"} onClick={handlechange}/>: <ImMenu3 fontSize={"25px"} onClick={handlechange}/>}
              {toggle ? <Dropdown props={handlechange}/>: null}
    </div>

      </div>
    </div>
  )
}

export default Header