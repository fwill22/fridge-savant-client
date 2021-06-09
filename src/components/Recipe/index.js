import React, { useState } from 'react'
import SearchComponent from '../Search'

const RecipeComponent = (json) => {
  
  let recipe = json[0]
  console.log(recipe)

  return (
    <div>
      <ul>
        <li> {recipe.title}</li>
        <li> {recipe.image}</li>

      </ul>
    </div>
  )

}


export default RecipeComponent