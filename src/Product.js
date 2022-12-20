import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// passing the values to product()
function Product({ id, heading, title, price, image }) {
  // dispatch here means how we are manipulating data.
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  // add to cart button animation function
  document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
      if (!button.classList.contains("loading")) {
        button.classList.add("loading");
        setTimeout(() => button.classList.remove("loading"), 3700);
      }
      e.preventDefault();
    })
  );

  const addToBasket = () => {
    // dispatch an action/ "item" into the data layer.
    let data = [];
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket, { id, heading, title, price, image }])
    );
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // product elements from above.
        id: id, // product id
        heading: heading,
        title: title,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <h2>{heading}</h2>
        <p style={{textAlign:"start", marginInline:"-10px"}}>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div>
        <img src={image}></img>
      </div>
      {/* this step is taken after react context api */}
      {/* when button is clicked it will perform an action. */}
      <button className="button" onClick={addToBasket}>
        <span>Add to basket</span>
        <div class="cart">
          <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Product;
