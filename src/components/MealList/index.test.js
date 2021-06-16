import MealList from '.'
import { render, fireEvent } from "@testing-library/react"


let defaultProps;

describe("<MealList/>", () => {
  beforeEach(() => {
    defaultProps = {
      mealData: [
        {
          image: "http://fun.pics/123",
          title: 'test1',
          extendedIngredients: [
            {
              id: 1234,
              name: 'apple'
            },
            {
              id: 4567,
              name: 'grape'
            }
          ],
          readyInMinutes: 5
        },
        {
          image: "http://fun.pics/456",
          title: 'test2',
          extendedIngredients: [
            {
              id: 1234,
              name: 'strawberry'
            },
            {
              id: 4567,
              name: 'pear'
            }
          ],
          readyInMinutes: 5
        }
      ]
    }
  })
  

  it("should rendered passed mealData as meals", () => {
    const rendered = render(<MealList {...defaultProps}/>)
    
    expect(rendered.getByText(/test1/i)).toBeInTheDocument();
    expect(rendered.getByText(/Apple/i)).toBeInTheDocument();
    expect(rendered.getByText(/test2/i)).toBeInTheDocument();
    expect(rendered.getByText(/Pear/i)).toBeInTheDocument();
    
  })

})