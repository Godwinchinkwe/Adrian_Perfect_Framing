import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='maindesciptionbosx'>
    <div className='descriptionbox' >
       <div className='descriptionbox-navigator'>
        <div className='description-nav-box'>Description</div>
        <div className='description-nav-box fade'>Reviews (122)</div>
       </div>
       <div className='descriptionbox-description'>
        <p> When buying a frame, it's essential to consider both style and functionality to best complement and protect the artwork or photo </p>
        <p> Materials like wood offer a classic, durable look, while metal frames give a modern, sleek feel. Ensure the frame includes sturdy backing, especially for valuable or delicate items, and consider UV-protected glass to shield against fading. </p>
       </div>
    </div>
    </div>
  )
}

export default DescriptionBox