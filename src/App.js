import React, { useState } from 'react';
import RecipeComponent from './components/Recipe';

function App() {
  const [basket, setBasket] = useState([]);
  const [recipeIds, setRecipeIds] = useState([]);

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`
    );
    let json = await result.json();
    console.log(json);
    setRecipeIds(recipeIds.push(formatRecipeIds(json)));
    recipeSearch(recipeIds)
  };

  const recipeSearch = (recipeIds) => {
    console.log(recipeIds)
    recipeIds = recipeIds.join()
    fetch( `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${recipeIds}` )
    .then((response) => response.json())
    .then((data) => { 
      console.log(data)
    })
  }
  

  const addIngredient = () => {
    setBasket(basket.concat(document.querySelector('#ingredientInput').value));
    resetQuery();
  };

  const resetQuery = () => {
    document.querySelector('#ingredientInput').value = '';
  };

  const resetBasket = () => {
    setBasket([]);
  };

  const resetRecipes = () => {
    setRecipeIds('');
  };

  const searchRecipes = () => {
    ingredientRequest(basket.join(',+'));
  };

  const formatRecipeIds = (data) => {
    return data.map((data) => data.id).join(',');
  };

  return (
    <div>
      <h1>Fridge Savant</h1>
      <input type='text' id='ingredientInput'></input>
      <button onClick={addIngredient}>Add ingredient</button>
      <button
        onClick={() => {
          searchRecipes();
        }}
      >
        Give me food
      </button>
      <button onClick={(resetBasket, resetRecipes)}>Clear search</button>
      {recipeIds.length !== 0 && <RecipeComponent recipeIds={recipeIds} />}
    </div>
  );
}

export default App;
