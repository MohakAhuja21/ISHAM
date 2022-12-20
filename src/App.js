import {useEffect} from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from './firebase';
import Checkout from './Checkout';
import {useStateValue} from "./StateProvider";

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      // console.log("the user is ",authUser);
      if (authUser) {
        // user was logged in/ user logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        // user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
        <Route path="/login" element={[<Login/>]}/>
        <Route path="/" element={[<Header/>,<Home/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
