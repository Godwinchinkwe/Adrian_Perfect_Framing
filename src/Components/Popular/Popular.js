import React from 'react'
import "./Popular.css"
import data_product from "../Assets/data"
import Item from "../Item/Item"
// import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'

const Popular = () => {
  // const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  return (
    <div className='popular'>
        <h1> Popular Frames</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item)=>{
                return <Item key={1} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
            
        </div>
       <Link onClick={scrollToTop} to="gallery/"><button className="btnx">Explore More </button></Link> 
    </div>
  )
}

export default Popular