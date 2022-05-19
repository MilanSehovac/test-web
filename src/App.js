import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";


function App() {
 
  return (
    <div className="App">
     <Header/>
      <div className="login-section">
        <h2>
          Ovo je aplikacija za menadzment projekata, molim vas ulogujte se preko
          googla
        </h2>
        <Login/>
      </div>
    </div>
  );
}

export default App;
