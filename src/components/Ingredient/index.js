import React from 'react';
import styles from './index.module.css'
import { capitalizeFirstLetter } from '../../lib/string-utils'

const Ingredient = ({ name, deleteIngredient }) => {
  return (
    <div className='ingredient'>
      <span className='ingredient-name'>
        {capitalizeFirstLetter(name)}
      </span>
      <button data-testid="deleteIngredientButton" onClick={() => deleteIngredient(name)}>Delete Ingredient</button>
    </div>
  );
};

export default Ingredient;
