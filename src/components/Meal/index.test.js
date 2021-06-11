import Meal from '.'
import { render } from "@testing-library/react"

let mockMeal = {
  image: "http://fun.pics/123",
  sourceUrl: "http://fun.world/hello",
  title: "fun world",
  readyInMinutes: 5
}

describe("<Meal/>", () => {
  it("renders a meal correctly", () => {
    const rendered = render(<Meal meal={mockMeal}/>)

    expect(rendered.getByAltText("your meal")).toHaveAttribute("src", mockMeal.image)
    expect(rendered.getByText(mockMeal.title)).toBeTruthy()
    expect(rendered.getByText(mockMeal.title)).toHaveAttribute("href", mockMeal.sourceUrl)
    expect(rendered.getByText(`Ready in ${mockMeal.readyInMinutes} minutes`)).toBeTruthy()
  })
})