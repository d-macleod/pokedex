import React from "react";
import LeftScreen from "./LeftScreen";
import PokeIndex from "../ui/PokeIndex";
import Controlpad from "../ui/Controlpad";
import RightScreen from "./RightScreen";

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="left">
        <div className="camera"></div>
        <LeftScreen />
        <button className="circle-btn ll-btn"></button>
        <PokeIndex />
        <Controlpad />
      </div>
      <div className="middle"></div>
      <div className="right">
        <RightScreen />
      </div>
    </div>
  );
};

export default Pokedex;
