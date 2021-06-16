import React from 'react';
import Meal from '../Meal';
import './index.js';

const MealList = ({ mealData }) => {
  return (
    <section className='Recipes'>
      <h1>Recipes for you</h1>
      {mealData.map((meal) => {
        return <Meal key={meal.id} meal={meal} style={{ color: 'red' }} />;
      })}
    </section>
  );
};

export default MealList;
