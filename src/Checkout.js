import React  from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{basket, user}, dispatch]=useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
        <h3>hey, <span>{!user? 'Guest': user.email.split('@')[0].replace(/[0-9]/g, '')}</span> </h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* checkoutProduct */}
          {/* for every single item in the basket we will return a checkout product and its taking these props */}
          {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            heading={item.heading}
            image={item.image}
            price={item.price}
            />
          ))} 
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
        {/* <h2>Subtotal</h2> */}
      </div>
    </div>
  );
}

export default Checkout;
