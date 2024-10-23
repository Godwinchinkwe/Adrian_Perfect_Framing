import React from 'react'
import "./Experience.css"
import { MdLocalShipping } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

const Experience = () => {

 

  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle'><FaWarehouse /></div>
            <span>Big</span>
            <span>Warehouse</span>
        </div>

        <div className='achievement'>
            <div className='circle'><FaPeopleCarry /></div>
            <span>Careful</span>
            <span>Transportation</span>
        </div>
        <div className='achievement'>
            <div className='circle'><MdLocalShipping /></div>
            <span>Fast</span>
            <span>Delivery</span>
        </div>
      
    </div>
  )
}

export default Experience
