import React from 'react';
import Recipe from '../Recipe';

const RecipeList = ({ mealData }) => {
  return (
    <section className='recipes'>
      {mealData.map((meal) => {
        return <Recipe key={meal.id} meal={meal} />;
      })}
    </section>
  );
};

export default RecipeList;
