import React, { useState } from 'react';

const searchBasket = []

function App() {

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    // console.log(searchBasket)
    console.log(json)
  }

  const [ingredient, setIngredient] = useState(null)

  const handleChange = (e) => {
    setIngredient(e.target.value)
  }

  const resetQuery = () => {
    document.querySelector('#ingredientInput').value = ''
  }

  const searchRecipes = () => {
    searchBasket.push(ingredient)
    ingredientRequest(searchBasket.join(',+'))
    resetQuery()
  }

  return (
    <div className='App'>
      <h1>Hello</h1>
      <input type='text' id='ingredientInput' onChange={handleChange}></input>
      <button onClick={() => {
        searchRecipes()
      }}>Give me food</button>
    </div>
  );
}

export default App;
