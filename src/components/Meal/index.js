// import React from 'react';
import './index.css';
import Share from '../Share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const Meal = ({ meal }) => {
  return (

    <div className='meal-card'>
      <img src={meal.image} alt="your meal" />
      <div className='meal-card-body'>
        <div className='meal-card-text'>
          <h3>{meal.title}</h3>
          <p>Ready in {meal.readyInMinutes} minutes</p>
          <p>{meal.summary}</p>
        </div>
        <button className='more-info-meal' 
          type="button"
          onClick={ (e) => {
          e.preventDefault();
          window.location.href=`${meal.sourceUrl}` } }>View this recipe...</button>
        <button className='bookmark-meal'><FontAwesomeIcon icon={faBookmark} className='bookmark-icon' /></button>
        <Share className='email-share-btn' title={meal.title} recipeUrl={meal.sourceUrl}/>
      </div>
    </div>
  );
};

export default Meal;
