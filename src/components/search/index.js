import React, { useState } from 'react'
import RecipeComponent from '../Recipe'

const SearchComponent = () => {

  const [basket, setBasket] = useState([])
  const [recipeIds, setRecipeIds] = useState([])

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(json, basket)
    resetBasket() 
    setRecipeIds(recipeIds.push(formatRecipeIds(json)))
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

  const formatRecipeIds = (json) => {
    let array = json.map(json => json.id ).join(',')
    return array
  }

 

  return (
    <div>
      <input type='text' id='ingredientInput'></input>
      <button onClick={addIngredient}>Add ingredient</button>
      <button onClick={() => {
      searchRecipes()
    }}>Give me food</button>
    </div>
  )
}

export default SearchComponent