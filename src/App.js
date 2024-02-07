// src/App.tsx

import React from "react";
import logo from "./logo.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div>
        <p>Hello, I am Mariam</p>
      </div>
    </div>
  );
}

export default App;
