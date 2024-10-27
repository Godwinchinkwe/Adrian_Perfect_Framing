import React from 'react'
import "./CSS/Product.css"
import Item from '../Components/Item/Item'
import all_product from "../Components/Assets/all_product"
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  // const {productId} = useParams();
  // const {all_product} = useContext(ShopContext);
  // const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div className='all_productx'>
            <h1> AVALIABLE FRAMES</h1>
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