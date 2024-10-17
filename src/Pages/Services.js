import React from 'react'
import "./CSS/Service.css"
import tent1 from "../Components/Assets/tent-1.jpg"
import tent2 from "../Components/Assets/tent-2.jpg"

const Services = () => {
  return (
    <div>
    {/* <nav> */}
      {/* <div class="nav__header">
        <div class="nav__logo">
          <a href="#">Camp</a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-line"></i>
        </div>
      </div> */}
      {/* <ul class="nav__links" id="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul> */}
      {/* <div class="nav__btns">
        <button class="btn"><i class="ri-search-line"></i></button>
        <button class="btn"><i class="ri-shopping-bag-line"></i></button>
      </div>
    </nav> */}
    <div class="cantainer">
      <div class="cantainer__left">
        <h1>Enjoy Your Holidays</h1>
        <div class="cantainer__btn">
          <button class="btn">BOOK NOW</button>
        </div>
      </div>
      <div class="cantainer__right">
        <div class="images">
          <img src={tent1} alt="tent-1" class="tent-1" />
          <img src={tent2} alt="tent-2" class="tent-2" />
        </div>
        <div class="contentx">
          <h4>12m2 | 2 beds</h4>
          <h2>BASIC TENT</h2>
          <h3>Your Camping Experience</h3>
          <p>
          Adrian Perfect Framing Limited is a professional manufacturer of sublimation MDF photo blocks and frames in Nigeria, with over 2 years of development and 8 years of expertise in the photo framing industry. We specialize in customized frames in various designs and shapes, catering to diverse customer requirements.

          </p>
        </div>
      </div>
      <div class="location">
        <span><i class="ri-map-pin-2-fill"></i></span>
        OUR LOCATION
      </div>
      <div class="socials">
        <span>
          {/* <a href=""><i class="ri-facebook-fill"></i></a> */}
        </span>
        <span>
          {/* <a href=""><i class="ri-instagram-line"></i></a> */}
        </span>
        <span>
          {/* <a href=""><i class="ri-twitter-fill"></i></a> */}
        </span>
      </div>
    </div>

    </div>
  )
}

export default Services