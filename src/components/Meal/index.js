// import React from 'react';
import './index.css';

const Meal = ({ meal }) => {
  return (
    <div class='meal-card'>
      <img src={meal.image} alt="your meal" />
      <div class='meal-card-body'>
        <div class='meal-card-text'>
          <h3>{meal.title}</h3>
          <p>Ready in {meal.readyInMinutes} minutes</p>
          <p>{meal.summary}</p>
        </div>
        <button>More...</button>
        <button class='bookmark-meal'>B</button>
      </div>
    </div>
  );
};

export default Meal;
