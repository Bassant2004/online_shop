import React from "react";
import Button from "./Button";

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>

      <p className="price">${product.price}</p>

      <Button />
    </div>
  );
}

export default React.memo(Card);