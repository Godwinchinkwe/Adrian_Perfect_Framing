// import React from 'react'
// import React, { useState, useEffect } from 'react';
import React from 'react';
import "./CSS/Gallery.css"
import Item from '../Components/Item/Item'
import all_product from "../Components/Assets/all_product"
// import Pop from "../Pages/Pop"
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../Context/ShopContext'

const Product = () => {

  // const [isPromptVisible, setIsPromptVisible] = useState(false);

  // useEffect(() => {
  //   setIsPromptVisible(true);
  // }, []);

  // const closePrompt = () => {
  //   setIsPromptVisible(false);
  // };
  // const {productId} = useParams();
  // const {all_product} = useContext(ShopContext);
  // const product = all_product.find((e)=> e.id === Number(productId));

  // const modalStyle = {
  //   position: 'fixed',
  //   top:'13%',
  //   left:'13%',
  //   width: '72%',
  //   height: '72%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };
  
  // const modalContentStyle = {
  //   backgroundColor: 'gray',
  //   padding: '20px',
  //   borderRadius: '8px',
  //   textAlign: 'center',
  //   boxshadow: 'rgba(149, 128, 128, 0.35) 0px 5px 15px'

    
  // };
  return (
    <div className='all_productx'>

<div className='promptdata'>
      {/* {isPromptVisible && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
          <h3>This is a prompt that appears when you open the homepage.</h3>
            <Pop />
            <p>This is a prompt that appears when you open the homepage.</p>
            <button onClick={closePrompt}> X </button>
          </div>
        </div>
      )} */}
    </div>
            <h1> Explore Our Available Frames</h1>
        <hr/>
        <div className='popular-products'>
            {all_product.map((item)=>{
                return <Item key={1} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}

export default Product