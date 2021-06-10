import React from 'react';

const Ingredient = ({ name, deleteIngredient }) => {
  return (
    <div className='ingredient'>
      <span className='ingredient-name'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      <button onClick={() => deleteIngredient(name)}>Delete Ingredient</button>
    </div>
  );
};

export default Ingredient;
