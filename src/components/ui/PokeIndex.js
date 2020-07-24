import React, { useState } from "react";

const PokeIndex = ({ getQuery }) => {
  const [index, setIndex] = useState(1);

  const onChange = (q) => {
    setIndex(q);
    getQuery(q);
  };

  return (
    <input
      type="number"
      min="1"
      max="807"
      name="index"
      className="poke-index"
      value={index}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default PokeIndex;
