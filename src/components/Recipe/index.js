import React, { useEffect } from 'react';

const Recipe = ({ recipe }) => {
  useEffect(() => {
    fetch(
      `https://api.spooncular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${recipe.id}`
    )
      .then((response) => response.json())
      .catch(() => {
        console.log('error');
      });
  }, [recipe.id]);

  return <h1>{recipe.title}</h1>;
};

export default Recipe;
