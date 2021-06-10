import React from 'react';
import Recipe from '../Recipe';

const RecipeList = ({ mealData }) => {
  return (
    <section className='recipes'>
      {mealData.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
};

export default RecipeList;
