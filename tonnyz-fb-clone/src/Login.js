import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    //do soe login staff
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        <p>Sign into Tonnyz facebook</p>
      </button>
    </div>
  );
}

export default Login;
