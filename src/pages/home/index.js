import React, { useState, useEffect, useContext } from "react";
import MealList from "../../components/MealList";
import IngredientList from "../../components/IngredientList";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import WelcomeText from "../../components/WelcomeText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SearchBox from "../../components/SearchBox";
import { StoreContext } from "../../providers/store";

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

  // const deleteIngredient = (ingredientName) => {
  //   setBasket(
  //     basket.filter((ingredient) => ingredient.name !== ingredientName)
  //   );
  // };

  const getMealInfo = (ingredients) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ranking=2&ingredients=${ingredients}`
      )
      .then((response) => {
        setMealIds(mealIds.push(formatMealIds(response)));
        getMealData(mealIds);
      })
      .catch(() => {
        ("Error");
      });
  };

  const getMealData = (mealIds) => {
    let mealIdString = mealIds.join();
    axios
      .get(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${mealIdString}`
      )
      .then((response) => {
        setMealData(response.data);
        resetMealIds();
      });
  };

  // const resetBasket = () => {
  //   setBasket([]);
  // };

  const searchMeals = () => {
    const ingredientNames = basket.map((ingredient) => ingredient.name);
    getMealInfo(ingredientNames.join(",+"));
  };

  const formatMealIds = (response) => {
    return response.data.map((data) => data.id).join(",");
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
    <div className="Home">
      <div className="Header">
        <Header />
      </div>
      <div className="WelcomeText">
        <WelcomeText />
      </div>
      <div className="Slider">
        <Slider />
      </div>
      <SearchBox addIngredient={addIngredient} />

      <div className="Ingredients">
        <IngredientList basket={basket} deleteIngredient={removeIngredient} />
      </div>
      <div className="IngredientsOptions">
        {basket.length > 0 && (
          <>
            <button
              onClick={() => {
                searchMeals();
              }}
              className="search-recipe-button"
            >
              find recipes
            </button>

            <button
              id="reset-basket-button"
              onClick={clearAll}
              className="reset-basket-button"
            >
              clear ingredients
            </button>
          </>
        )}
      </div>
      <div className="Recipes">{mealData && <MealList mealData={mealData} />}</div>
      <div className="User">User</div>
      <div className="Footer">Footer</div>
    </div>
  );
};

export default Home;
