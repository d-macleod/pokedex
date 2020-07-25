import React from "react";

const LeftScreen = ({ pokemon }) => {
  let url = "https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png";
  if (pokemon.length !== 0) {
    url = pokemon.sprites
      ? pokemon.sprites.front_default
      : "https://miro.medium.com/max/978/1*pUEZd8z__1p-7ICIO1NZFA.png";
  }
  return (
    <div className="screen-backing">
      <div className="left-screen">
        <img src={url} alt="..." />
      </div>
      <button className="circle-btn screen-btn"></button>
    </div>
  );
};

export default LeftScreen;
