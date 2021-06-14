import Header from '.'
import { render } from "@testing-library/react"


describe("<Header/>", () => {

  it("should display the header attributes", () => {
    const rendered = render(<Header/>)

    expect(rendered.getByTestId("headerLogo")).toBeTruthy()
    expect(rendered.getByTestId("navbar")).toBeTruthy()
  })
})