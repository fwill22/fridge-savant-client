import React, { useState } from 'react';

function App() {

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(json)
  }

  const [ingredient, setIngredient] = useState(null)

  const handleChange = (e) => {
    setIngredient(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Hello</h1>
      <input type='text' onChange={handleChange}></input>
      <button onClick={() => ingredientRequest(ingredient)}>Give me food</button>
    </div>
  );

}

export default App;
