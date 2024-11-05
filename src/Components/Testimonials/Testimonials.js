import React from 'react'
import './Testimonials.css'
import HeadingText from '../HeadingText/HeadingText'
// import Cards from '../../UI/Cards'
import TestimonialCard from './TestimonialCard'
import { Testimony } from '../Assets/Testimony'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
  return (
    <section className='test-cont'>
        <HeadingText title={'Clients'} titlePrimary={'Testimonials'} />
        <div className='container testimonials-container'>
            <Swiper 
            className='testimonials-wrapper'
            slidesPerView={1}
            spaceBetween={10}
            > {
                Testimony.map(({id, img, name, des})=>{
                    return(
                        <SwiperSlide key={id}>
                        <TestimonialCard classname={'testimony'}>
                        <img src={img} alt=""/>
                        <h5>{name}</h5>
                        <p>{des}</p>
                        </TestimonialCard>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials