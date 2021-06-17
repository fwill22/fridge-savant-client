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
    <div className="SearchBox">
      <div className="form-container">
        <div className="form-tab">
          <div className="search-field">
            <FontAwesomeIcon icon={faCarrot} className="search-icon" />
            <form>
              <input
                type="text"
                className="ingredient-input"
                placeholder="What's in your fridge?"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
              />
            </form>
          </div>
          <div
            className="add-ingredient-btn"
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
