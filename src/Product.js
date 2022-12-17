import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// passing the values to product()
function Product({ id, heading, title, price, image }) {
  // dispatch here means how we are manipulating data.
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  const addToBasket = () => {
    // dispatch an action/ "item" into the data layer.
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
        <p>{title}</p>
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
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
}

export default Product;
