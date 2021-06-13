import IngredientList from '.'
import { render, fireEvent } from "@testing-library/react"


let defaultProps;

describe("<IngredientList />", () => {
  beforeEach(() => {
    defaultProps = {
      basket: [
        {
              name: "test1",
              deleteIngredient: jest.fn()
            },
            {
              name: "test2",
              deleteIngredient: jest.fn()
            }
      ],
      deleteIngredient: jest.fn()
    }
  })
  

  it("should display the names of passed ingredients", () => {
    const rendered = render(<IngredientList {...defaultProps}/>)
    
    expect(rendered.getByText(/test1/i)).toBeInTheDocument();
    expect(rendered.getByText(/test2/i)).toBeInTheDocument();
  })

})