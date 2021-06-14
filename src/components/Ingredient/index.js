import React from 'react';
import './index.css';
import { capitalizeFirstLetter } from '../../lib/string-utils';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Ingredient = ({ name, image, deleteIngredient }) => {
  return (
    <div className='ingredient-container'>
      <div className='ingredient-name'>{capitalizeFirstLetter(name)}</div>
      <img src={image}/>
      <FontAwesomeIcon
        icon={faTrash}
        data-testid='deleteIngredientButton'
        onClick={() => deleteIngredient(name)}
        class='ingredient-icon'
      />
    </div>
  );
};

export default Ingredient;
