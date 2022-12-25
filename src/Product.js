import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Modal from "./Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DoneIcon from '@mui/icons-material/Done';
import { display } from "@mui/system";

// passing the values to product()
function Product({ id, heading, title, price, image }) {
  // dispatch here means how we are manipulating data.
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  // EXPERIMENTAL
  const [state, setState] = useState(false);

  
  const addToBasket = () => {
    // EXPERIMENTAL
    setState(!state);

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

  //  experimental "MODAL"
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image}></img>
      {/* this step is taken after react context api */}
      {/* when button is clicked it will perform an action. */}
      <button
        style={{ marginBottom: "-20px" }}
        className={"toggle-button " + (state ? "toggle-close" : "")}
        onClick={addToBasket}
      >
        <DoneIcon className="check"></DoneIcon>
        {state ? "" : "Add to basket"}
      </button>
      {/* Experimental modal popup*/}
      <br></br>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="openModalBtn"
      >
        <VisibilityIcon></VisibilityIcon>
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Product;
