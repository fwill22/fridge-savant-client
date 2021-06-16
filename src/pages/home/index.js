import React, { useState, useContext } from 'react';
import Advertisements from '../../components/Advertisements';
import MealList from '../../components/MealList';
import IngredientList from '../../components/IngredientList';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import WelcomeText from '../../components/WelcomeText';
import Footer from '../../components/Footer';
import axios from 'axios';
import SearchBox from '../../components/SearchBox';
import { StoreContext } from '../../providers/store';

const Home = () => {
  const [{ basket }, { addIngredient, removeIngredient, clearIngredients }] =
    useContext(StoreContext);
  const [mealData, setMealData] = useState(null);
  const [mealIds, setMealIds] = useState([]);

  // const addIngredient = () => {
  //   if (
  //     basket.find(
  //       (ingredient) => ingredient.name === ingredientInput.toLowerCase()
  //     )
  //   ) {
  //     // add flash error message
  //   } else if (ingredientInput === "") return;
  //   else {
  //     setBasket(basket.concat({ name: ingredientInput }));
  //   }
  //   setIngredientInput("");
  // };

  const getMealInfo = (ingredients) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY5}&ranking=2&ingredients=${ingredients}`
      )
      .then((response) => {
        setMealIds(mealIds.push(formatMealIds(response)));
        getMealData(mealIds);
      })
      .catch(() => {
        ('Error');
      });
  };

  const getMealData = (mealIds) => {
    let mealIdString = mealIds.join();
    axios
      .get(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY5}&ids=${mealIdString}`
      )
      .then((response) => {
        setMealData(response.data);
        resetMealIds();
      });
  };

  const searchMeals = () => {
    const ingredientNames = basket.map((ingredient) => ingredient.name);
    getMealInfo(ingredientNames.join(',+'));
  };

  const formatMealIds = (response) => {
    return response.data.map((data) => data.id).join(',');
  };

  const resetMealIds = () => {
    setMealIds([]);
  };

  const resetMeals = () => {
    setMealData(null);
  };

  const clearAll = () => {
    clearIngredients();
    resetMeals();
  };

  //flash message for creating bookmarks / you have already bookmarked this + log out

  return (
    <div class='Home'>
      <div class='Header'>
        <Header />
      </div>
      <div class='WelcomeText'>
        <WelcomeText />
      </div>
      <div class='Slider'>
        <Slider />
      </div>
      <SearchBox addIngredient={addIngredient} />

      <div class='Ingredients'>
        <IngredientList basket={basket} deleteIngredient={removeIngredient} />
      </div>
      <div class='IngredientsOptions'>
        {basket.length > 0 && (
          <>
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
          </>
        )}
      </div>
      <div class='Recipes'>{mealData && <MealList mealData={mealData} />}</div>
      <div class='Adverts'>{mealData && <Advertisements />}</div>
      <div class='Footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
