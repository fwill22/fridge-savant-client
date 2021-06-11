import React from 'react';
import './index.css'

const Ingredient = ({ name, deleteIngredient }) => {
  return (
    <div className='ingredient'>
      <span className='ingredient-name'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      <button class = 'delete-ingredient' onClick={() => deleteIngredient(name)}>D</button>
    </div>
  );
};

export default Ingredient;
