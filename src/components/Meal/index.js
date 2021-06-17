import React, { useState } from "react";
import "./index.css";
import EmailShare from "../EmailShare";
import FacebookShare from "../FacebookShare";
import WhatsappShare from "../WhatsappShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { capitalizeFirstLetter } from "../../lib/string-utils";
import axios from "axios";
import { getAuthToken } from "../../lib/token";

const Meal = ({ meal }) => {
  const [bookmarkColour, setBookmarkColour] = useState("");

  const changeColour = () => {
    bookmarkColour === ""
      ? setBookmarkColour("-goldbutton") // post request
      : setBookmarkColour(""); // delete request;
  };

  const saveBookmark = () => {
    changeColour();

    const response = axios.post(
      "http://localhost:5000/api/bookmarks",
      {
        recipeId: meal.id.toString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  };

  return (
    <div className="meal-card">
      <img src={meal.image} alt="your meal" />
      <div className="meal-card-body">
        <div className="meal-card-text">
          <h3>{meal.title}</h3>
          <p>Ready in {meal.readyInMinutes} minutes</p>
          <ul className="meal-card-ingredients">
            {meal.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>
                  {" "}
                  {capitalizeFirstLetter(ingredient.name)}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="more-info-meal" type="button">
          <a href={meal.sourceUrl} target="_blank" rel="noreferrer">
            View this recipe...
          </a>
        </button>
        <EmailShare
          className="email-share-btn"
          title={meal.title}
          recipeUrl={meal.sourceUrl}
        />
        <FacebookShare
          className="facebook-share-btn"
          recipeUrl={meal.sourceUrl}
        />
        <WhatsappShare
          className="whatsapp-share-btn"
          recipeUrl={meal.sourceUrl}
        />
        <FontAwesomeIcon
          icon={faBookmark}
          size="2x"
          className={`bookmark-icon${bookmarkColour}`}
          onClick={saveBookmark}
        />
      </div>
    </div>
  );
};

export default Meal;
