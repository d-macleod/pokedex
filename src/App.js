import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState(1);

  const isValidIndex = (i) => {
    if (isNaN(i) || i === "NaN") {
      return false;
    } else if (i > 807 || i < 1) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      if (isValidIndex(query)) {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${query}`
        );
        setPokemon(result.data);
      } else {
        setPokemon([]);
      }
    };
    fetchPokemon();
  }, [query]);

  return (
    <div className="container">
      <Pokedex getQuery={(q) => setQuery(q)} query={query} pokemon={pokemon} />
    </div>
  );
}

export default App;
