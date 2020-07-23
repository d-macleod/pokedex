import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";

function App() {
  return (
    <div className="container">
      <Pokedex />
    </div>
  );
}

export default App;
