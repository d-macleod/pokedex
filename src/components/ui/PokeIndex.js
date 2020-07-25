import React from "react";

const PokeIndex = ({ getQuery, query }) => {
  const onChange = (q) => {
    getQuery(q);
  };

  return (
    <input
      type="number"
      min="1"
      max="807"
      required="required"
      placeholder="1"
      name="index"
      className="poke-index"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default PokeIndex;
