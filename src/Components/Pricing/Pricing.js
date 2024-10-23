import React from 'react'
import "./Pricing.css"

const Pricing = () => {
  return (
    <div className='pricing-table'>
        <div className='details'>
            <h2>Adrian Perfect Framing </h2>
            <h3>Price List</h3>
        </div>

        <div className='grid'>
            {/* <div className='box'>
                <div className='title'> Basic</div>
                <div className='price'>
                  <b>$24.99</b>
                  <span>per month</span> 
                </div>
                <div className='features'>
                    <div>6X8 ..... 2500</div>
                    <div>6X8 ..... 2500</div>
                    <div>6X8 ..... 2500</div>
                    <div>6X8 ..... 2500</div>
                    <div>6X8 ..... 2500</div>
                    <div>6X8 ..... 2500</div>
                    <div>6X8 ..... 2500</div>
                </div>
            </div> */}


            <div className='box'>
                <div className='title'>PHOTO</div>
                <div className='price'>
                  <b>FrameLess</b>
                  <span>PRICE LIST</span> 
                </div>
                <div className='features'>
                     <div>6X8 ----  ₦2500</div>
                    <div>8x10 ----  ₦4000</div>
                    <div>8x10 ----  ₦4000</div>
                    <div>10x12 ----  ₦6000</div>
                    <div>12x16 ----  ₦8000</div>
                    <div>16x20 ----  ₦12000</div>
                    <div>16x24 ----  ₦15000</div>
                    <div>20x24 ----  ₦19000</div>
                    <div>20x30 ----  ₦25000</div>
                    <div>24x36 ----  ₦32000</div>
                    <div>36x72 ----  ₦85000</div>
                </div>
                

            </div>
            <div className='box'>
                <div className='title'> PHOTO</div>
                <div className='price'>
                  <b>Acrylic Frame</b>
                  <span>PRICE LIST</span> 
                </div>
                <div className='features'>
                    <div>8x10 ----  ₦6000</div>
                    <div>8x12 ----  ₦6000</div>
                    <div>10x12 ----  ₦8000</div>
                    <div>12x16 ----  ₦12000</div>
                    <div>16x20 ----  ₦18000</div>
                    <div>16x24 ----  ₦22000</div>
                    <div>20x24 ----  ₦26000</div>
                    <div>20x30 ----  ₦38000</div>
                    <div>24x36 ----  ₦42000</div>  
                </div>
          
            </div>
        </div>
    </div>
  )
}

export default Pricing