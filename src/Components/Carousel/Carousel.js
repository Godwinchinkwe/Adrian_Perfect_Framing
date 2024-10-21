import React  from 'react'
import "slick-carousel/slick/slick.css";   
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import pic1 from "../Assets/tent-1.jpg"
import pic2 from "../Assets/tent-2.jpg"
import pic3 from "../Assets/tent-2.jpg"
import pic4 from "../Assets/tent-2.jpg"



function Carousel() {

    const settings = {
        dots: true,
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 5000,
        cssEase:"linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 5,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      };



  return (
    <>
    <div className='bod'>
        <div className='slider'>
        <Slider {...settings}>

<div className='slider-div'>
  <h3 > Chicks</h3>
  <img src={pic1} alt="Chicks" className='cont' />
</div>

 <div className='slider-div'>
<h3> Cat Fish</h3>
<img src={pic2} alt="" className='cont' />
</div> 

<div className='slider-div'>
<h3>Cat Fish</h3>
<img src={pic3} alt="" className='cont' />
</div>

<div className='slider-div'>
<h3> Hens</h3>
<img src={pic4} alt="" className='cont'  />
</div>

</Slider>

        </div>
    </div>
    </>
  )
}


export default Carousel