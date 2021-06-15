import React, { useEffect } from 'react';
import './index.css';
import { capitalizeFirstLetter } from '../../lib/string-utils';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'

const Ingredient = ({ name, deleteIngredient }) => {
  const [ingredientImage, setIngredientImage] = useState(null);

  useEffect(() => {
    axios.get (
      `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`
    )
    .then((response) => {
      console.log(response.data.results[0])
      setIngredientImage(
        `https://spoonacular.com/cdn/ingredients_100x100/${response.data.results[0].image}`
      );
    });
  }, []); 

 

  return (
    <div className='ingredient-container'>
      <div
        className='ingredient-name'
        style={{ backgroundImage: `url(${ingredientImage})` }}
      >
        {capitalizeFirstLetter(name)}
      </div>
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
