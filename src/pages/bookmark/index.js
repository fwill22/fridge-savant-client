import React from 'react';
import './index.css';
import Header from '../../components/Header';
import UserText from '../../components/UserText';
import MealList from '../../components/MealList';

const mealData = [
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/710X7iyZ6kL._AC_SL1500_.jpg',
    title: 'test1',
    summary: 'testSummary1',
    readyInMinutes: 5,
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/710X7iyZ6kL._AC_SL1500_.jpg',
    title: 'test2',
    summary: 'testSummary2',
    readyInMinutes: 5,
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/710X7iyZ6kL._AC_SL1500_.jpg',
    title: 'test3',
    summary: 'testSummary3',
    readyInMinutes: 5,
  },
];

const Bookmark = () => {
  return (
    <div className='Bookmark'>
      <div class='Header'>
        <Header />
      </div>
      <div class='UserText'>
        <UserText />
      </div>
      <h1>Your Saved Recipes</h1>
      <MealList mealData={mealData} />
    </div>
  );
};

export default Bookmark;
