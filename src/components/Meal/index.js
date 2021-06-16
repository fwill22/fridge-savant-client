import React, { useState } from 'react';
import './index.css';
import EmailShare from '../EmailShare'
import FacebookShare from '../FacebookShare';
import WhatsappShare from '../WhatsappShare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { capitalizeFirstLetter } from "../../lib/string-utils";

const Meal = ({ meal }) => {
  
  const [bookmarkColour, setBookmarkColour] = useState('');

  const changeColour = () => {
    bookmarkColour === '' ? setBookmarkColour("-goldbutton") : setBookmarkColour('')
  }

  return (
    <div className='meal-card'>
      <img src={meal.image} alt="your meal" />
      <div className='meal-card-body'>
        <div className='meal-card-text'>
          <h3>{meal.title}</h3>
          <p>Ready in {meal.readyInMinutes} minutes</p>
          <ul className='meal-card-ingredients'>
            {meal.extendedIngredients.map((ingredient) => {
              return <li key = {ingredient.id}> {capitalizeFirstLetter(ingredient.name)}</li>
            })}
          </ul>
        </div>
        <button className='more-info-meal' 
          type="button"
          onClick={ (e) => {
          e.preventDefault();
          window.location.href=`${meal.sourceUrl}` } }>View this recipe...</button>
        <EmailShare className='email-share-btn' title={meal.title} recipeUrl={meal.sourceUrl}/>
        <FacebookShare className='facebook-share-btn' recipeUrl={meal.sourceUrl}/>
        <WhatsappShare className='whatsapp-share-btn' recipeUrl={meal.sourceUrl}/>
        <FontAwesomeIcon icon={faBookmark} size='2x' className={`bookmark-icon${bookmarkColour}`} onClick={changeColour}/>
      </div>
    </div>
  );
};

export default Meal;
