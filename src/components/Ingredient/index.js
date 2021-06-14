import React from 'react';
import './index.css';
import { capitalizeFirstLetter } from '../../lib/string-utils';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ingredient = ({ name, image, deleteIngredient }) => {
  const [ingredientImage, setIngredientImage] = useState(null);

  fetch(
    `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY5}&query=${name}`
  )
    .then((response) => response.json())
    .then((data) => {
      setIngredientImage(
        `https://spoonacular.com/cdn/ingredients_100x100/${data.results[0].image}`
      );
    });
  return (
    <div className='ingredient-container'>
      <div className='ingredient-name'>{capitalizeFirstLetter(name)}</div>
      <img src={ingredientImage} alt='img' />
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
