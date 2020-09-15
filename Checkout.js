import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import Product from './Product'
import {useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
function Checkout()
 {
    const [{basket,user},dispatch] = useStateValue();
  return (
    <div className="checkout">

<div className="checkout_ad">
<img alt="" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
<div>
<h3>Hello You are logged in as --> {user?.email}</h3>
<h1 className="checkout_title">Your shopping basket </h1>
{basket.map(item =>(
<CheckoutProduct
   id={item.id}
     title={item.title}
     image={item.image}
     price={item.price}
     rating={item.rating}
     />




)
 )}
 <checkoutProduct/>
</div>
</div>
<div className="checkout_right">
<Subtotal/>
</div>

    </div>

  )
}

export default Checkout
