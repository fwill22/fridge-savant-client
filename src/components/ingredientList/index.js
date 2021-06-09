import React from 'react';
import './index.css';
import Ingredient from '../ingredient';

const IngredientList = (props) => {
  console.log('in list', props.deleteIngredient)
  return (
    <div className="ingredient-list">
      {props.basket.map((ingredient) => (
        <Ingredient key={`ingredient-${ingredient.name}`} 
                    {...{name: ingredient.name}}
                    {...{deleteIngredient: props.deleteIngredient}}/>
      ))}
    </div>
  );
};

export default IngredientList;
