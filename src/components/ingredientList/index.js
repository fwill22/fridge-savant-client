import React from 'react';
import './index.css';
import Ingredient from '../ingredient';

const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      {props.basket.map((ingredient) => (
        <Ingredient key={`ingredient-${ingredient}`} {...{name: ingredient}}/>
      ))}
    </div>
  );
};

export default IngredientList;
