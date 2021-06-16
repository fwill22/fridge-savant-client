import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SearchBox = ({ addIngredient }) => {
  const [ingredientInput, setIngredientInput] = useState("");

 const queryChange = (ingredientInput) => {

   if(ingredientInput === "" ) {
     return
   } 
    addIngredient({ name: ingredientInput.toLowerCase()})
    setIngredientInput("")
  }

  return (
    <div class="SearchBox">
      <div class="form-container">
        <div class="form-tab">
          <div class="search-field">
            <FontAwesomeIcon icon={faCarrot} class="search-icon" />
            <form>
              <input
                type="text"
                class="ingredient-input"
                placeholder="What's in your fridge?"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
              />
            </form>
          </div>
          <div
            class="add-ingredient-btn"
            onClick={() =>
              queryChange(ingredientInput)
            }
          >
            <p>add ingredient</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
