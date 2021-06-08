import React, { useState } from 'react';

function App() {

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(json)
  }
  return (
    <div className='App'>
      <h1>Hello</h1>
      <button onClick={() => ingredientRequest('apple')}>Give me apples</button>
    </div>
  );

}

export default App;
