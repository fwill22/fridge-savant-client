import React, { useState, useEffect } from 'react'
import IngredientList from '../ingredientList'; 

const SearchComponent = () => {

  const [basket, setBasket] = useState([])
  
  useEffect(() => {
    if (basket.length !== 0) {
      document.getElementById('reset-basket-button').style.display = "block"
    } else {
      document.getElementById('reset-basket-button').style.display = "none"
    }
  })

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(json, basket)
  }

  const addIngredient = () => {
    const ingredient = document.querySelector('#ingredientInput').value.toLowerCase()
    if (basket.includes(ingredient)) { 
      // add flash error message
    } else {
      setBasket(basket.concat({name: ingredient}))
    }
    resetQuery()
  }

  const resetQuery = () => {
    document.querySelector('#ingredientInput').value = ''
  }

  const resetBasket = () => {
    setBasket([])
  }

  const searchRecipes = () => {
    const ingredientNames = basket.map(ingredient => ingredient.name)
    ingredientRequest(ingredientNames.join(',+'))
  }

  const deleteIngredient = (ingredientName) => {
    setBasket(basket.filter(ingredient => ingredient.name !== ingredientName))
  }

  return (
    <div>
      <input type='text' id='ingredientInput'></input>
      <button onClick={addIngredient}>Add ingredient</button>
      <button onClick={() => {
      searchRecipes()
    }}>Give me food</button>
      <IngredientList basket={basket} deleteIngredient={deleteIngredient} />
      <button id='reset-basket-button' onClick={resetBasket}>Clear Ingredients</button>
    </div>
  )
}

export default SearchComponent
