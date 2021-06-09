import React, { useState } from 'react';

const SearchComponent = () => {
  const [basket, setBasket] = useState([]);

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`
    );
    let json = await result.json();
    console.log(json, basket);

    // this is temporary
    resetBasket();
  };

  const handleChange = () => {
    setBasket(basket.concat(document.querySelector('#ingredient-input').value));
    resetQuery();
  };

  const resetQuery = () => {
    document.querySelector('#ingredient-input').value = '';
  };

  const resetBasket = () => {
    setBasket([]);
  };

  const searchRecipes = () => {
    ingredientRequest(basket.join(',+'));
  };

  return (
    <div>
      <input type='text' id='ingredient-input'></input>
      <button onClick={handleChange}>Add ingredient</button>
      <button
        onClick={() => {
          searchRecipes();
        }}
      >
        Give me food
      </button>
    </div>
  );
};

export default SearchComponent;
