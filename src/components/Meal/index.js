import React, { useEffect } from 'react';

var parser = new DOMParser();


const Meal = ({ meal }) => {
  return (
    <div>
      <img src={meal.image} alt="your meal"></img>
      <h1><a href={meal.sourceUrl}>{meal.title}</a></h1>
      <h5>Ready in {meal.readyInMinutes} minutes</h5>
    </div>
  )
};

export default Meal;
