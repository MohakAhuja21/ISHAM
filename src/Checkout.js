import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>
            hey,{" "}
            <span>
              {!user ? "Guest" : user.email.split("@")[0].replace(/[0-9]/g, "")}
            </span>{" "}
          </h3>
          {/* checkoutProduct */}
          {/* for every single item in the basket we will return a checkout product and its taking these props */}
          <h2 className="checkout__title">Your shopping basket</h2>
          <FlipMove
                staggerDurationBy={30}
                duration={750}
                delay={30}
                // enterAnimation={""}
                // leaveAnimation={""}
              >
                 {basket && basket?.length > 0 ? (
            <div>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  heading={item.heading}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          ) : (
            <div className="checkout__emptyBasket">
              <img src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg"></img>
              <p>
                Looks like you have not added anything yet.<br></br> Let's go
                buy something!
              </p>
            </div>
          )}
        </FlipMove>
        </div>
      </div>
      {/* \\ We have an array in the variable basket and we are mapping that array there like basket.map. this is the case when there is value in the array called basket.
there you can see I wrote a condition there to check the length of the array basket, that is basket.length
is there is value in basket the return of basket.length will be more than 0 else it will be zero
and I rendered the empty message at the case when the basket.length is zero and render mapping if the basket.length is more that zero. As a result of that if there is no product in the basket it will show the message other wise it will map the array */}
      {basket && basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
          {/* <h2>Subtotal</h2> */}
        </div>
      )}
    </div>
  );
}

export default Checkout;
