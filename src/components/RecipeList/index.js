import React, { useState, useEffect } from 'react';

const RecipeList = ({ mealData }) => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${mealData}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipe([...recipe, { title: data[0].title }]);
        console.log(recipe);
      })
      .catch(() => {
        console.log('error');
      });
  });

  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  );
};

export default RecipeList;
