import React from 'react';
import Meal from '../Meal';
import './index.js';

const MealList = ({ mealData }) => {
  console.log(mealData)
  return (
    <section className='Recipes'>
      <h1 className='test'>Recipes for you</h1>
      {mealData.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </section>
  );
};

export default MealList;
