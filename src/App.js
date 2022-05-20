import React from "react";
import "./App.css";
import Login from "./components/Login"

function App() {

  return (
    <div className="App">
      <div className="login-section">
        <h2>
          Ovo je aplikacija za menadzment projekata, molim vas ulogujte se preko
          googla
        </h2>
        <Login />
      </div>
    </div>
  );
}

export default App;
