import React, { useState } from "react";
import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const handleFailure = (result) => {
    alert("nije uspjelo");
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul className="menu-ul">
          <li className="menu-li">
            <a className="menu-a">Home</a>
          </li>
        </ul>
        <div className="login">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
