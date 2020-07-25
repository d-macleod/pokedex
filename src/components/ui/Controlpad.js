import React from "react";

const Controlpad = ({ getQuery, query }) => {
  const incrementIndex = () => {
    if (query < 807) {
      getQuery(parseInt(query) + 1);
    }
  };

  const decrementIndex = () => {
    if (query > 1) {
      getQuery(parseInt(query) - 1);
    }
  };

  return (
    <div className="ctrl-pad">
      <button onClick={incrementIndex} className="btn-ctrl up-pad">
        &#9650;
      </button>
      <button className="btn-ctrl right-pad">&#9658;</button>
      <div className="square"></div>
      <button onClick={decrementIndex} className="btn-ctrl down-pad">
        &#9660;
      </button>
      <button className="btn-ctrl left-pad">&#9668;</button>
    </div>
  );
};

export default Controlpad;
