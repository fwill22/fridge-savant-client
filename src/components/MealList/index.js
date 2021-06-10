import React from 'react';
import Meal from '../Meal';

const MealList = ({ mealData }) => {
  return (
    <section className='recipes'>
      {mealData.map((meal) => {
        return <Meal key={meal.id} meal={meal} />;
      })}
    </section>
  );
};

export default MealList;
