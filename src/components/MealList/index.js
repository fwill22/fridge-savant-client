import React from 'react';
import Meal from '../Meal';
import './index.js'

const MealList = ({ mealData }) => {
  return (
    <div className='container'>
      {mealData.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </div>
  );
};

export default MealList;
