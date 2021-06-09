import React, { useState } from 'react'
import IngredientList from '../ingredientList'; 

const SearchComponent = () => {

  const [basket, setBasket] = useState([])

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(json, basket)
    resetBasket() 
  }

  const addIngredient = () => {
    setBasket(basket.concat(document.querySelector('#ingredientInput').value))
    resetQuery()
  }

  const resetQuery = () => {
    document.querySelector('#ingredientInput').value = ''
  }

  const resetBasket = () => {
    setBasket([])
  }

  const searchRecipes = () => {
    ingredientRequest(basket.join(',+'))
  }

  return (
    <div>
      <input type='text' id='ingredientInput'></input>
      <button onClick={addIngredient}>Add ingredient</button>
      <button onClick={() => {
      searchRecipes()
    }}>Give me food</button>
      <IngredientList basket={basket} />
    </div>
  )
}

export default SearchComponent