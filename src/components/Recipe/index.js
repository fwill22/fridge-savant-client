import React, { useState } from 'react';

const RecipeComponent = ({ recipeIds }) => {
  const [recipeData, setRecipeData] = useState([]);

 
  // console.log(recipeIds)
  // fetch( `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${recipeIds}` )
  //   .then((response) => response.json())
  //   .then((data) => { 
  //     console.log(data)
  //   })
 

  return (
    <div>
      <ul>
        <li> =</li>
      </ul>
    </div>
  );
};

export default RecipeComponent;
