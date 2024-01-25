// Card.js
import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button onClick={() => console.log(`Button clicked for ${title}`)}>Add to Cart</button>
    </div>
  );
};

export default Card;
