import React from 'react';
import Ingredient from '../Ingredient';
import './index.css'

const IngredientList = ({ basket, deleteIngredient }) => {
  return (
    <div className='Ingredients'>
      {basket.map((ingredient) => (
        <Ingredient
          key={`ingredient-${ingredient.name}`}
          {...{ name: ingredient.name }}
          {...{ deleteIngredient: deleteIngredient }}
        />
      ))}
    </div>
  );
};

export default IngredientList;
