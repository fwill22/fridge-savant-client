import React from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Ingredient = ({ name, deleteIngredient }) => {
  return (
    <div className="ingredient">
      <span className="ingredient-name">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteIngredient(name)} swapOpacity/>
    </div>
  );
};

export default Ingredient;

