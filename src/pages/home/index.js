import React, { useState, useEffect } from 'react';
import MealList from '../../components/MealList';
import IngredientList from '../../components/IngredientList';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import WelcomeText from '../../components/WelcomeText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
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
      .querySelector('.ingredient-input')
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
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredients}`
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
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${mealIdString}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        resetMealIds();
      });
  };

  const resetQuery = () => {
    document.querySelector('.ingredient-input').value = '';
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
    <div class='Container'>
      <div class='Header'>
        <Header />
      </div>
      <div class='WelcomeText'>
        <WelcomeText />
      </div>
      <div class='Slider'>
        <Slider />
      </div>
      <div class='SearchBox'>
        <div class='form-container'>
          <div class='form-tab'>
            <div class='search-field'>
              <FontAwesomeIcon icon={faCarrot} class='search-icon' />
              <form>
                <input
                  type='text'
                  class='ingredient-input'
                  placeholder="What's in your fridge?"
                />
              </form>
            </div>
            <div class='add-ingredient-btn' onClick={addIngredient}>
              <p>add ingredient</p>
            </div>
          </div>
        </div>
      </div>

      <div class='Ingredients'>
        <IngredientList basket={basket} deleteIngredient={deleteIngredient} />
      </div>
      <div class='IngredientsOptions'>
        <button
          onClick={() => {
            searchMeals();
          }}
          className='search-recipe-button'
        >
          find recipes
        </button>
        <button
          id='reset-basket-button'
          onClick={clearAll}
          className='reset-basket-button'
        >
          clear ingredients
        </button>
      </div>
      <div class='Recipes'>{mealData && <MealList mealData={mealData} />}</div>
      <div class='User'>User</div>
      <div class='Footer'>Footer</div>
    </div>
  );
};

export default Home;
