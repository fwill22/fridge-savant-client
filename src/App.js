import React, { useState } from 'react';

const searchBasket = []

function App() {

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(result)
    console.log(json)
  }


  const [ingredient, setIngredient] = useState(null)

  const handleChange = (e) => {
    setIngredient(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Hello</h1>
      <input type='text' id='ingredientInput' onChange={handleChange}></input>
      <button onClick={() => {
        searchBasket.push(ingredient)
        ingredientRequest(searchBasket.join(',+'))
        document.querySelector('#ingredientInput').value = ''
      }}>Give me food</button>
    </div>
  );
}

export default App;
