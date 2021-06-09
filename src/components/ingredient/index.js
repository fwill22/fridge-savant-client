import React from 'react';
import './index.css'; 

const Ingredient = ({ name }) => {
  return (
    <div className="ingredient">
      <p className="indredient-name">{name}</p>
    </div>
  );
};
