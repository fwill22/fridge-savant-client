import React, { useState } from 'react';
import MealList from './components/MealList';

function App() {
  const [basket, setBasket] = useState([]);
  const [mealData, setMealData] = useState(null);
  const [mealIds, setMealIds] = useState([]);

  function getMeals(ingredients) {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealIds(mealIds.push(formatMealIds(data)));
        mealSearch(mealIds);
      })
      .catch(() => {
        console.log('Error');
      });
  }

  const mealSearch = (mealIds) => {
    console.log(mealIds);
    let mealIdString = mealIds.join();
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${mealIdString}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMealData(data);
        resetMealIds();
      });
  };


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

  function searchMeals() {
    getMeals(basket.join(',+'));
  }

  const formatMealIds = (data) => {
    return data.map((data) => data.id).join(',');
  };


  const resetMealIds = () => {
    setMealIds([]);
  };

  function resetMeals() {
    setMealData(null);
  }

  return (
    <div>
      <input type='text' id='ingredient-input'></input>
      <button onClick={handleChange}>Add ingredient</button>
      <button onClick={() => { searchMeals() }}>
        Give me food
      </button>
      <button id='reset-basket-button' onClick={(resetBasket, resetMeals)}>Clear Ingredients</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
