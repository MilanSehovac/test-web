import React, { useState } from "react";
import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const handleFailure = (result) => {
    alert("nije uspjelo");
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
    alert("uspjesno ste se logovali");
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul className="menu-ul">
          <li className="menu-li">
            <a className="menu-a">Home</a>
          </li>
        </ul>
      </header>

      <div className="login">
        <h2>
          Ovo je aplikacija za menadzment projekata, molim vas ulogujte se preko
          googla
        </h2>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Google Log in"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
    </div>
  );
}

export default App;
