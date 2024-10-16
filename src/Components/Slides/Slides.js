import React from 'react'
import Slider from "react-slick";
import "./Slides.css"
// import SlideContent from './SlideContent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {

    const settings = {
        dots: false,
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 10000,
        cssEase:"linear"
  
      };

  return (
    <div>
        <Slider {...settings}>
          <div className='slide_1'>
          <h1>1</h1>
        </div>
      <div>
      <h1>2</h1>
      </div>
      <div>
      <h1>3</h1>
      </div>
      <div>
      <h1>4</h1>
      </div>
      <div>
      <h1>5</h1>
      </div>
      <div>
      <h1>6</h1>
      </div>
    </Slider>
      
    </div>
  )
}

export default Slides