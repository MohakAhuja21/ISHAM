import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import logo from "../src/source/ISHAM.svg";
// TOP LOADER
import { useStateValue } from "./StateProvider";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // TOP LOADER
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    // prevent default will prevent the page from refreshing.
    e.preventDefault();
    // linking firebase//

    // TOP LOADER
    dispatch({
      type: "CHANGE_LOADER",
      loader: true,
      loader_status: 40,
    });

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // TOP LOADER
        dispatch({
          type: "CHANGE_LOADER",
          loader: true,
          loader_status: 100,
        });

        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    // linking firebase//
    // it will create a user with that user and password and will come back with auth object.

    // TOP LOADER
    dispatch({
      type: "CHANGE_LOADER",
      loader: true,
      loader_status: 40,
    });

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user with provided email and pass.
        // console.log(auth);

        // TOP LOADER
        dispatch({
          type: "CHANGE_LOADER",
          loader: true,
          loader_status: 100,
        });

        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {/* logo */}
      <Link to="/">
        <img className="login__logo" src={logo} alt="website logo" />
      </Link>
      {/*Login form*/}
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 style={{marginTop:"5px"}}>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Isham's{" "}
          <a href="#">terms and conditions</a>
        </p>
        <button onClick={register} className="login__registerButton">
          create your account at <b>ISHAM</b>
        </button>
      </div>
    </div>
  );
}

export default Login;
