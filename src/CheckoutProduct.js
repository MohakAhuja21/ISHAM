import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, image, title, price}) {

  // in order to manipulate the basket we will use this code(below)
  const[{basket},dispatch]=useStateValue();

  const removeFromBasket=()=>{
// when button is clicked it will remove the item from checkout page
dispatch({
  type:"REMOVE_FROM_BASKET",
  id:id,
  // REMOVE_FROM_BASKET is also used in reducer.js
  // we are using id to find out the product.
})
};

  return (
    <div className="CheckoutProduct">
        <img className="CheckoutProduct__image" src={image}></img>
        <div className="CheckoutProduct__info">
            <p className="CheckoutProduct__title">{title}</p>
            <button onClick={removeFromBasket}>remove from basket</button>
        </div>
        <p className="CheckoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <hr/>
    </div>
  )
}

export default CheckoutProduct
