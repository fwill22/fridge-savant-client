import SignUpForm from '.'
import { render, fireEvent } from "@testing-library/react"

let defaultProps;

describe("<signupForm/>", () => {
  beforeEach(() => {
    defaultProps = {
      handleSignUpSubmit: jest.fn(),
      handleCardFlip: jest.fn(),
      handleChange: jest.fn()
    }
  })

  it("should display the form labels", () => {
    const rendered = render(<SignUpForm />)
    
    expect(rendered.getByTestId("signUpTitle")).toBeTruthy()
    expect(rendered.getByTestId("signUpLink")).toBeTruthy()
  })

  // it("should call handleSignUpClick when signUp button is clicked", () => {
  //   const rendered = render(<SignUpForm />)

  //   fireEvent.click(rendered.getByTestId("signUpLink"))

  //   expect(defaultProps.handleSubmitClick).toHaveBeenCalledTimes(1)
    
  // })

})