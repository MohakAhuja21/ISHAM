import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
  // pasting this code from header.js
  const [{basket}, dispatch]= useStateValue();


  return (
    <div className="subtotal">
      {/* below code is copied from https://medium.com/cleverprogrammer/amazon-clone-using-react-the-ultimate-guide-fba2b36f3458 */}
       <CurrencyFormat
      //  this value will be passed to the value under decimalScale.//
        renderText={(value) => (
          <>
            <p>
              {/* editing it from 0 items to basket.length */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        // used in the price area to get value in two decimal place.
        decimalScale={2}
        // replace the value {getBasketTotal(basket)} to 0
        // changing value of 0.
        value={getBasketTotal(basket)} 
        displayType={"text"}
        // meaning 1,00,000 it will separate the value with comma's.
        thousandSeparator={true}
        // currency 
        prefix={"$"} 
        // ₹
      />
      <button>Checkout</button>
    </div>
  )
}

export default Subtotal