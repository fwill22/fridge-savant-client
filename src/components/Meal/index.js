// import React from 'react';
import './index.css';

const Meal = ({ meal }) => {
  return (
    <div class='card'>
      <img src={meal.image} alt='image' />
      <div class='card-body'>
        <div class='card-text'>
          <h3>{meal.title}</h3>
          <p>Ready in {meal.readyInMinutes} minutes</p>
          <p>{meal.summary}</p>
        </div>
        <button>More...</button>
      </div>
    </div>
  );
};

export default Meal;
