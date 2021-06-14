// import React from 'react';
import './index.css';
import Share from '../Share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Meal = ({ meal }) => {
  return (
    <div class='card'>
      <img src={meal.image} alt="your meal" />
      <div class='card-body'>
        <div class='card-text'>
          <h3>{meal.title}</h3>
          <p>Ready in {meal.readyInMinutes} minutes</p>
          <p>{meal.summary}</p>
        </div>
        <button class='more-info-meal'>More...</button>
        <button class='bookmark-meal'><FontAwesomeIcon icon={faBookmark} class='bookmark-icon' /></button>
        <Share class='email-share-btn' title={meal.title} recipeUrl={meal.sourceUrl}/>
      </div>
    </div>
  );
};

export default Meal;
