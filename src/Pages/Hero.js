import React from 'react'
import Landing from '../Components/Landing/Landing'
import Carousel from '../Components/Carousel/Carousel'
import Popular from "../Components/Popular/Popular"
import Experience from "../Components/Experience/Experience"


const Hero = () => {
  return (
    <div>
      <Landing />
      <Carousel/>
      <Popular />
      <Experience />
  

    </div>
  )
}

export default Hero

