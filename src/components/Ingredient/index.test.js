import Ingredient from '.'
import { render, fireEvent } from "@testing-library/react"
import * as StringUtils from "../../lib/string-utils"


jest.mock("../../lib/string-utils")

let defaultProps;

describe("<Ingredient />", () => {
  beforeEach(() => {
    defaultProps = {
      name: "test",
      deleteIngredient: jest.fn()
    }

    StringUtils.capitalizeFirstLetter.mockImplementation(() => "Test")
  })

  it("should display the name passed to it capitalized", () => {
    const rendered = render(<Ingredient {...defaultProps}/>)
    
    expect(StringUtils.capitalizeFirstLetter).toHaveBeenCalledTimes(1)
    expect(rendered.getByText("Test")).toBeTruthy()
  })

  it("should call deleteIngredient with the name of the ingredient when the button is clicked", () => {
    const rendered = render(<Ingredient {...defaultProps}/>)

    fireEvent.click(rendered.getByTestId("deleteIngredientButton"))

    expect(defaultProps.deleteIngredient).toHaveBeenCalledTimes(1)
  })
})