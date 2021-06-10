import React, { useEffect } from 'react';

const Meal = ({ meal }) => {
  

  return (
    <div>
      <img src={meal.image}></img>
      <h1><a href={meal.sourceUrl}>{meal.title}</a></h1>
    </div>
  )
};

export default Meal;
