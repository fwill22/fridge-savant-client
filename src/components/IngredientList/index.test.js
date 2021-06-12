import IngredientList from '.'
import { render, fireEvent } from "@testing-library/react"


let basket;

describe("<IngredientList />", () => {
  beforeEach(() => {
    basket = [
      {
        name: "test",
        deleteIngredient: jest.fn()
      },
      {
        name: "test2",
        deleteIngredient: jest.fn()
      }
    ]
  })
  

  it("should display the names of passed ingredients", () => {
    // console.log(basket)
    const rendered = render(<IngredientList {...basket}/>)
    
    expect(rendered.getByText("test")).toBeTruthy()
    expect(rendered.getByText("test2")).toBeTruthy()
  })

})