import React from "react";
import LeftScreen from "./LeftScreen";
import PokeIndex from "../ui/PokeIndex";
import Controlpad from "../ui/Controlpad";
import RightScreen from "./RightScreen";

const Pokedex = ({ getQuery, pokemon }) => {
  return (
    <div className="pokedex">
      <div className="left">
        <div className="flex">
          <div className="camera"></div>
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>
        <LeftScreen pokemon={pokemon} />
        <button className="circle-btn ll-btn"></button>
        <PokeIndex getQuery={getQuery} />
        <Controlpad />
      </div>
      <div className="middle"></div>
      <div className="right">
        <RightScreen pokemon={pokemon} />
        <div className="btn-grd">
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
          <button className="btn-rect"></button>
        </div>
        <div className="btn-flex">
          <button className="circle-btn btn-sm btn-t"></button>
          <button className="circle-btn btn-sm btn-y"></button>
          <button className="oval-btn btn-g"></button>
          <button className="oval-btn btn-o"></button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
