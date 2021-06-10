
import React, { useState, useEffect } from 'react';
import MealList from './components/MealList';
import IngredientList from './components/IngredientList';


const App = () => {
  const [basket, setBasket] = useState([]);
  const [mealData, setMealData] = useState(null);
  const [mealIds, setMealIds] = useState([]);

  useEffect(() => {
    if (basket.length !== 0) {
      document.getElementById('reset-basket-button').style.display = 'block';
    } else {
      document.getElementById('reset-basket-button').style.display = 'none';
    }
  });

  const addIngredient = () => {
    const newIngredient = document
      .querySelector('#ingredient-input')
      .value.toLowerCase();
    if (basket.find((ingredient) => ingredient.name === newIngredient)) {
      // add flash error message
    } else {
      setBasket(basket.concat({ name: newIngredient }));
    }
    resetQuery();
  };

  const deleteIngredient = (ingredientName) => {
    setBasket(
      basket.filter((ingredient) => ingredient.name !== ingredientName)
    );
  };

  const getMealInfo = (ingredients) => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY4}&ingredients=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealIds(mealIds.push(formatMealIds(data)));
        getMealData(mealIds);
      })
      .catch(() => {
        ('Error');
      });
  };

  const getMealData = (mealIds) => {
    let mealIdString = mealIds.join();
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY4}&ids=${mealIdString}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        resetMealIds();
      });
  };

  const resetQuery = () => {
    document.querySelector('#ingredient-input').value = '';
  };

  const resetBasket = () => {
    setBasket([]);
  };

  const searchMeals = () => {
    const ingredientNames = basket.map((ingredient) => ingredient.name);
    getMealInfo(ingredientNames.join(',+'));
  };

  const formatMealIds = (data) => {
    return data.map((data) => data.id).join(',');
  };

  const resetMealIds = () => {
    setMealIds([]);
  };

  const resetMeals = () => {
    setMealData(null);
  };

  const clearAll = () => {
    resetBasket();
    resetMeals();
  };

  return (
    <div>
      <input type='text' id='ingredient-input'></input>
      <button onClick={addIngredient}>Add ingredient</button>
      <button onClick={() => { searchMeals() }}>
        Give me food
      </button>
      <button id='reset-basket-button' onClick={clearAll}>
        Clear Ingredients
      </button>
      <IngredientList basket={basket} deleteIngredient={deleteIngredient} />
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
};

export default App;
