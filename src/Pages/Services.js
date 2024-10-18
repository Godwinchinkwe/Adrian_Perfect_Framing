import React from 'react'
import "./CSS/Service.css"
import { GiStickFrame } from "react-icons/gi";
import { MdOutlineBorderColor } from "react-icons/md";
// import { MdPrecisionManufacturing } from "react-icons/md";
import { FiGift } from "react-icons/fi";

const Services = () => {
  return (
    <div className='services-cont' >
      <div className='service-title'>
        <h1>Our Services</h1>
      </div>
      <div className='services-services'>
        <div className='services-card'>
          <div className='services-icon'>
          <GiStickFrame />
          </div>
          <h2> Framing </h2>
          <p> Customized photo frames and blocks. </p>
          {/* <button className='services-button'>Read Me</button> */}
        </div>
        <div className='services-card'>
          <div className='services-icon'>
          <MdOutlineBorderColor />
          </div>
          <h2>OEM orders with low MOQ</h2>
          <p> OEM orders with low MOQ </p>
          {/* <button className='services-button'>Read Me</button> */}
        </div>
        {/* <div className='services-card'>
          <div className='services-icon'>
          <MdPrecisionManufacturing />
          </div>
          <h2>One-stop manufacturing </h2>
          <p> One-stop manufacturing and shipping service</p>
          <button className='services-button'>Read Me</button>
        </div> */}

        <div className='services-card'>
          <div className='services-icon'>
          <FiGift />
          </div>
          <h2>Personalized</h2>
          <p>Personalized gifts, houseware, home/office decoration, sporting events, and party celebration solutions </p>
          {/* <button className='services-button'>Read Me</button> */}
        </div>
        
      </div>
    </div>
  )
}

export default Services