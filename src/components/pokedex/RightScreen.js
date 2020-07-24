import React from "react";

const RightScreen = ({ pokemon }) => {
  const convertHeight = (height) => {
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
    let lbs = weight * 0.22;
    return `${lbs.toFixed(1)} lbs`;
  };

  return (
    <div className="right-screen">
      <h2>Name: {pokemon.name ? pokemon.name.toUpperCase() : "error"}</h2>
      <h2>Height: {convertHeight(pokemon.height)}</h2>
      <h2>Weight: {convertWeight(pokemon.weight)}</h2>
    </div>
  );
};

export default RightScreen;
