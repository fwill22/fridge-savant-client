import React, { useState } from 'react';
import RecipeList from './components/RecipeList';

function App() {
  const [basket, setBasket] = useState([]);
  const [mealData, setMealData] = useState(null);

  // const ingredientRequest = async (ingredient) => {
  //   let result = await fetch(
  //     `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`
  //   );
  //   let json = await result.json();
  //   console.log(json, basket);

  //   // this is temporary
  //   resetBasket();
  // };

  function getMeals(ingredients) {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(mealData);
      })
      .catch(() => {
        console.log('Error');
      });
    resetBasket();
  }

  function handleChange() {
    basket.push(document.querySelector('#ingredient-input').value);
    console.log(basket);
    resetQuery();
  }

  function resetQuery() {
    document.querySelector('#ingredient-input').value = '';
  }

  function resetBasket() {
    setBasket([]);
  }

  function searchRecipes() {
    getMeals(basket.join(',+'));
  }

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
      {mealData && <RecipeList mealData={mealData} />}
    </div>
  );
}

export default App;
