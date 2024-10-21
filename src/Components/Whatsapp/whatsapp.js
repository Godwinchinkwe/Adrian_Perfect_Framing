import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import "./Whatsapp.css"


const whatsapp = () => {
  return (
    <span className='Bg-toggler' >
    <p>Chat wit us</p>
     <a className='Bg-togglerxx'  target="_blank" rel="noreferrer" href="https://wa.link/3esapq">
       <BsWhatsapp fontSize={"35px"} />
     </a>
   </span>
  )
}

export default whatsapp