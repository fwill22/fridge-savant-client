import React from 'react';
import './index.css'; 

const Ingredient = (props) => {
  console.log('in ingredient', props)
  return (
    <div className="ingredient">
      <span className="ingredient-name">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
      <button onClick={() => props.deleteIngredient(props.name)}>Delete Ingredient</button>
    </div>
  );
};

export default Ingredient;
