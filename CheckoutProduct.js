import React from 'react'
import './checkoutProduct.css'
import {useStateValue } from "./StateProvider"

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
const RemovefromBasket= ()=>{
  //remove item RemovefromBasket

    dispatch({
      type: 'Remove_From_Basket',
      id:id,
})
}
  return (
    <div className="checkoutProduct">
    <img src={image}/>
    <div>
    <div className="checkoutProduct_info">
    <p className="checkoutProduct_title">
    <h3>{title}</h3>
    </p>
    <p className="checkoutProduct_price">
    <small>₹</small>
    <strong>{price}</strong>

    </p>
    <p className="checkoutProducr_rating">
    {Array(rating).fill().map((_,i)=>(
        <p>⭐</p>
      )
      )}
    </p>
    </div>
    <button onClick={RemovefromBasket}>Remove from basket</button>

    </div>

    </div>
  )
}

export default CheckoutProduct;
