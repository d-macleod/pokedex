import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pokedex from "./components/pokedex/Pokedex";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState(1);

  // axios("https://pokeapi.co/api/v2/pokemon/1").then((res) =>
  //   setPokemon(res.data)
  // );

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${query}`);
      setPokemon(result.data);
    };
    fetchPokemon();
  }, [query]);

  return (
    <div className="container">
      <Pokedex getQuery={(q) => setQuery(q)} pokemon={pokemon} />
    </div>
  );
}

export default App;
