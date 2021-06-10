import React, { useEffect } from 'react';

const Recipe = ({ meal }) => {
  // useEffect(() => {
  //   fetch(
  //     `https://api.spooncular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${meal.id}`
  //   )
  //     .then((response) => response.json())
  //     .catch(() => {
  //       console.log('error');
  //     });
  // }, [meal.id]);

  return <h1>{meal.title}</h1>;
};

export default Recipe;
