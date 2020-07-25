import React from "react";

const RightScreen = ({ pokemon }) => {
  const convertHeight = (height) => {
    if (isNaN(height)) {
      return "error";
    }
    let inches = height * 3.937;
    let feet = Math.floor(inches / 12);
    let remaining = inches % 12;
    if (Math.round(remaining) === 12) {
      feet = 1;
      remaining = 0;
    }
    return `${feet}' ${Math.round(remaining)}''`;
  };

  const convertWeight = (weight) => {
    if (isNaN(weight)) {
      return "error";
    }
    let lbs = weight * 0.22;
    return `${lbs.toFixed(1)} lbs`;
  };

  const typeDisplay = (types) => {
    let result = "";
    types.forEach((type) => (result += `${type.type.name}, `));
    return result.substring(0, result.length - 2);
  };

  return (
    <div className="right-screen">
      <h2>Name: {pokemon.name ? pokemon.name.toUpperCase() : "error"}</h2>
      <h2>Type: {pokemon.types ? typeDisplay(pokemon.types) : "error"}</h2>
      <h2>Height: {convertHeight(pokemon.height)}</h2>
      <h2>Weight: {convertWeight(pokemon.weight)}</h2>
    </div>
  );
};

export default RightScreen;
