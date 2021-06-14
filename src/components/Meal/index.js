// import React from 'react';
import './index.css';
import Share from '../Share'

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
        <button>More...</button>
        <button class='bookmark-meal'>B</button>
        <Share title={meal.title} recipeUrl={meal.sourceUrl}/>
      </div>
    </div>
  );
};

export default Meal;
