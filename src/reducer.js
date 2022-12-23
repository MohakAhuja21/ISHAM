export const initialState = {
  // empty basket
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
  // by default the user is set to null
  user: null,
  // TOP LOADER
  loader: false,
  loader_status: 0,
};

// Selector
// using this getBasketTotal in Subtotal.js
export const getBasketTotal = (basket) =>
  // item price gets added to the total amount and initial amount is set to 0.
  basket?.reduce((amount, item) => item.price + amount, 0);
// reduce function basically sums up the value in array and provides one single value.

// state is like what's the state of app. Action is like basically asking is what are we going to do with the basket, are we going to add the product or remove it.
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        // whatever the basket was currently was + whatever we actually decided to add. after that it's going to push these things to above basket:[] //
        basket: [...state.basket, action.item],
      };
    //... is (spread operator)

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // findIndex fn is going through all of the basket items and search for does any of the basket item matches the action id that i passed in. //
      let newBasket = [...state.basket];
      // copy whatever the state of basket currently is.
      if (index >= 0) {
        newBasket.splice(index, 1);
        // if index is greater than 0, it means that it found some product inside the basket.
        // splice method removes an existing element from an array
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as it's not in the basket. `
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    // coming from dispatch in app.js
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    // TOP LOADER
    case "CHANGE_LOADER":
      return {
        ...state,
        loader: action.loader,
        loader_status: action.loader_status,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
