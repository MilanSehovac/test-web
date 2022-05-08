import React, { useState } from "react";
import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul className="menu-ul">
          <li className="menu-li">
            <a href="App.js" className="menu-a">
              Home
            </a>
          </li>
        </ul>
      </header>
      <div className="login-section">
        <h2>
          Ovo je aplikacija za menadzment projekata, molim vas ulogujte se preko
          googla
        </h2>
        <div className="login">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Google Log in"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
}

export default App;
