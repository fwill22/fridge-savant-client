import React, { useState } from 'react';
import RecipeComponent from './components/Recipe';

function App() {
  const [basket, setBasket] = useState([]);
  const [recipeIds, setRecipeIds] = useState('');
  const [recipeData, setRecipeData] = useState(null);


  const ingredientRequest = async (ingredient) => {
    let result = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY4}&ingredients=${ingredient}`
    );
    let json = await result.json();
    console.log(json);
    setRecipeIds(recipeIds.concat(formatRecipeIds(json)));
    console.log(recipeIds)
    recipeSearch(recipeIds)
  };

  const recipeSearch = (recipeIds) => {
    fetch( `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY4}&ids=${recipeIds}` )
      .then((response) => response.json())
      .then((data) => { 
      console.log(data)
      setRecipeData(data) 
      resetRecipes()
      console.log(recipeData)
    })
      .catch(() => {
      console.log("Error")
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

  const searchIngredients = () => {
    ingredientRequest(basket.join(',+'));
  };

  const formatRecipeIds = (json) => {
    return json.map((json) => json.id).join(',');
  };

  return (
    <div>
      <h1>Fridge Savant</h1>
      <input type='text' id='ingredientInput'></input>
      <button onClick={addIngredient}>Add ingredient</button>
      <button onClick={ searchIngredients }>
        Give me food
      </button>
      <button onClick={resetBasket}>Clear search</button>
      {/* {< RecipeComponent recipeIds={recipeData} />} */}
    </div>
  );
}

export default App;
