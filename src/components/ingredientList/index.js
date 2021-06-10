import React from 'react';
import './index.css';
import Ingredient from '../ingredient';

const IngredientList = ({ basket, deleteIngredient }) => {
  return (
    <div className="ingredient-list">
      {basket.map((ingredient) => (
        <Ingredient key={`ingredient-${ingredient.name}`} 
                    {...{name: ingredient.name}}
                    {...{deleteIngredient: deleteIngredient}}/>
      ))}
    </div>
  );
};

export default IngredientList;
