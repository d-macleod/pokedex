import React from "react";

const LeftScreen = ({ pokemon }) => {
  let url = "../../../public/favicon.ico";
  if (pokemon.length !== 0) {
    url = pokemon.sprites.front_default;
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
