import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox' >
       <div className='descriptionbox-navigator'>
        <div className='description-nav-box'>Description</div>
        <div className='description-nav-box fade'>Reviews (122)</div>
       </div>
       <div className='descriptionbox-description'>
        <p> Framing, in construction, is the fitting together of pieces to give a structure, particularly a building, support and shape. Framing materials are usually wood, engineered wood, or structural steel. </p>
        <p> Historically, people fitted naturally shaped wooden poles together as framework and then began using joints to connect the timbers, a method today called traditional timber framing or log </p>
       </div>
    </div>
  )
}

export default DescriptionBox