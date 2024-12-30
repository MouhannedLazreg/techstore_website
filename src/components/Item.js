import React from "react";

function Item({ image, name, price }) {
  return (
    <div className="Item">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} TND </p>
    </div>
  );
}

export default Item;
