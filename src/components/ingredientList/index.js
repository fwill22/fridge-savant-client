import React, { useEffect } from 'react';
import './index.css';
import Ingredient from '../ingredient';

const IngredientList = (props) => {
  console.log(props.basket)
  return (
    <div className="ingredient-list">
      {props.basket.map((ingredient) => (
        <Ingredient key={`ingredient-${ingredient}`} {...{name: ingredient}}/>
      ))}
    </div>
  );
};

export default IngredientList;
