import React, { useState, useContext } from "react";
import { AuthContext } from "../../providers/auth";
import "./index.css";

const LoginForm = ({ handleCardFlip }) => {
  const [state, actions] = useContext(AuthContext);
  const [logInDetails, setLogInDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogInDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    //authentication API call
    actions.signIn(logInDetails);
  };

  const handleGetUser = (event) => {
    event.preventDefault();
    actions.getUser();
  };

  return (
    <div className="loginForm">
      <h2 className="loginTitle" data-testid="loginTitle">
        Login
      </h2>
      {state && state.user && (
        <div>
          you are:
          <p>{state.user.name}</p>
          <button onClick={handleGetUser}>Ask for yourself again ?</button>
        </div>
      )}
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          className="form-input"
          id="loginEmail"
          name="email"
          placeholder="Email"
          data-testid="loginEmail"
          value={logInDetails.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          className="form-input"
          id="loginPassword"
          name="password"
          placeholder="Password"
          value={logInDetails.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="submit"
          className="formButton"
          id="loginButton"
          value="Log In"
          data-testid="loginButton"
        />
      </form>
      <p>
        Don't have an account?{" "}
        <span
          className="signUpLink"
          data-testid="signUpLink"
          onClick={handleCardFlip}
        >
          Sign Up!
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
