import React from 'react';
import './index.css';
import Header from '../../components/Header';
import UserText from '../../components/UserText';
import MealList from '../../components/MealList';
import Footer from '../../components/Footer';

const mealData = [
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/710X7iyZ6kL._AC_SL1500_.jpg',
    title: 'test1',
    extendedIngredients: [
      {
        id: 5006,
        aisle: 'Meat',
        image: 'whole-chicken.jpg',
        consistency: 'solid',
        name: 'chicken',
        nameClean: 'whole chicken',
        original: '2 pounds chicken',
        originalString: '2 pounds chicken',
        originalName: 'chicken',
        amount: 2,
        unit: 'pounds',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 2,
            unitShort: 'lb',
            unitLong: 'pounds',
          },
          metric: {
            amount: 907.185,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
    ],
    readyInMinutes: 5,
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/710X7iyZ6kL._AC_SL1500_.jpg',
    title: 'test2',
    extendedIngredients: [
      {
        id: 5006,
        aisle: 'Meat',
        image: 'whole-chicken.jpg',
        consistency: 'solid',
        name: 'chicken',
        nameClean: 'whole chicken',
        original: '2 pounds chicken',
        originalString: '2 pounds chicken',
        originalName: 'chicken',
        amount: 2,
        unit: 'pounds',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 2,
            unitShort: 'lb',
            unitLong: 'pounds',
          },
          metric: {
            amount: 907.185,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
    ],
    readyInMinutes: 5,
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/710X7iyZ6kL._AC_SL1500_.jpg',
    title: 'test3',
    extendedIngredients: [
      {
        id: 5006,
        aisle: 'Meat',
        image: 'whole-chicken.jpg',
        consistency: 'solid',
        name: 'chicken',
        nameClean: 'whole chicken',
        original: '2 pounds chicken',
        originalString: '2 pounds chicken',
        originalName: 'chicken',
        amount: 2,
        unit: 'pounds',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 2,
            unitShort: 'lb',
            unitLong: 'pounds',
          },
          metric: {
            amount: 907.185,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
    ],
    readyInMinutes: 5,
  },
];

const Bookmark = () => {
  return (
    <div className='Bookmark'>
      <div className='Header'>
        <Header />
      </div>
      <div className='UserText'>
        <UserText />
      </div>
      <div className='Recipes'>
        <MealList mealData={mealData} />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Bookmark;
