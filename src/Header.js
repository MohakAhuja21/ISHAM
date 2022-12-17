import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import logo from "../src/source/ISHAM-white.png"
import { useStateValue } from "./StateProvider";
// import { BrowserRouter as Link} from "react-router-dom";

function Header() {
  // the below step is after using react-context-api
  const [{basket, user}, dispatch]= useStateValue();

  // navbar where there is an option to sign in/ sign out, we are making that a function
const handleAuthentication=()=>{
  if (user) {
    auth.signOut();
  }
}

// mobile navbar
const[isOpen,setIsOpen]=useState(false);

  return (
    <div className="header">
        <Link to ="/">
      {/* logo */}
        <img
          className="header__logo"
          src={logo}
          alt="website logo"
        />
        </Link>
      {/* search bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* navbar elements */}
      {/* adding mobile navbar functionality to header nav */}
      <div className={`header__nav ${isOpen && "open"}`}>
        {/* if there is no user, only then push to login page */}
        <Link to={!user &&'/login'} style={{textDecoration:"none"}}> 
        {/* option 1-> sign in */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne"> {!user? 'Hello, Guest': user.email.split('@')[0].replace(/[0-9]/g, '')}</span>
            {/* if user exists we will say sign out else sign in. */}
            <span className="header__optionLineTwo">{user ? 'sign out': 'sign in'}</span>
          </div>
          </Link>
        {/* option 2-> order history */}
        <div className="header__option">
          <span className="header__optionLineOne">returns &</span>
          <span className="header__optionLineTwo">Order</span>
        </div>
        {/* option 3->checkout basket */}
        <Link to="/checkout" style={{textDecoration:"none"}}>

          {/* EXPERIMENTAL */}
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          {/* changing basket count from 0 to this code. */}
          {/* ? here is know as optional chaining */}
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>

      {/* // mobile navbar */}
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>

      <Link to="/checkout" style={{textDecoration:"none"}}>
      <div className="header__optionBasketMobile">
          <ShoppingBasketIcon />
          {/* changing basket count from 0 to this code. */}
          {/* ? here is know as optional chaining */}
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>

</div>
  );
}

export default Header;
