import React, { useState } from 'react';

const RecipeComponent = ({ recipeIds }) => {
  const [recipeData, setRecipeData] = useState([]);

  if (recipeIds.length !== 0) {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${recipeIds}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data);
        // console.log(recipeData);
      })
      .catch(() => {
        console.log('error');
      });
  }

  return (
    <div>
      <ul>
        <li> =</li>
      </ul>
    </div>
  );
};

export default RecipeComponent;
