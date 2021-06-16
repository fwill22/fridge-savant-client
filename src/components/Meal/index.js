import React from 'react';
import './index.css';
import EmailShare from '../EmailShare'
import FacebookShare from '../FacebookShare';
import WhatsappShare from '../WhatsappShare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { capitalizeFirstLetter } from "../../lib/string-utils";

const Meal = ({ meal }) => {
  console.log(meal.extendedIngredients)  
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
        <button className='bookmark-meal'><FontAwesomeIcon icon={faBookmark} className='bookmark-icon' /></button>
        <EmailShare className='email-share-btn' title={meal.title} recipeUrl={meal.sourceUrl}/>
        <FacebookShare className='facebook-share-btn' recipeUrl={meal.sourceUrl}/>
        <WhatsappShare className='whatsapp-share-btn' recipeUrl={meal.sourceUrl}/>
      </div>
    </div>
  );
};

export default Meal;
