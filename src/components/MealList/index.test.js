import MealList from '.';
import { render } from '@testing-library/react';

let defaultProps;

describe('<MealList/>', () => {
  beforeEach(() => {
    defaultProps = {
      mealData: [
        {
          image: 'http://fun.pics/123',
          title: 'test1',
          ingredients: 'apple',
          readyInMinutes: 5
        },
        {
          image: 'http://fun.pics/456',
          title: 'test2',
          ingredients: 'pear',
          readyInMinutes: 5
        }
      ]
    }
  })


    expect(rendered.getByText(/test1/i)).toBeInTheDocument();
    expect(rendered.getByText(/apple/i)).toBeInTheDocument();
    expect(rendered.getByText(/test2/i)).toBeInTheDocument();
    expect(rendered.getByText(/pear/i)).toBeInTheDocument();
    
  })

})
