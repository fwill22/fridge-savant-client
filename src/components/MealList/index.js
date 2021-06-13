import React from 'react';
import Meal from '../Meal';
import './index.js';

const MealList = ({ mealData }) => {
  return (
    <section class='Recipes'>
      <h1 class='test'>Recipes for you</h1>
      {mealData.map((meal) => {
        return <Meal key={meal.summary} meal={meal} />;
        // tests want a unique key visible within html, can change back to id for better unique key
      })}
    </section>
  );
};

export default MealList;
