import React from 'react';
import './index.css'
import { capitalizeFirstLetter } from '../../lib/string-utils'

const Ingredient = ({ name, deleteIngredient }) => {
  return (
    <div className='ingredient'>
      <span className='ingredient-name'>
        {capitalizeFirstLetter(name)}
      </span>
      <button data-testid="deleteIngredientButton" onClick={() => deleteIngredient(name)}>D</button>
    </div>
  );
};

export default Ingredient;
