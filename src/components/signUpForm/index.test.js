import SignUpForm from '.'
import { render, fireEvent } from "@testing-library/react"
import {renderHook } from '@testing-library/react'


let defaultProps;
let mockSignUpFormActions = signUpFormProviderActions
let mockSignUpFormState = signUpFormState
let mockSignUpFormContext = jest.SpyInstance

describe("<signupForm/>", () => {
  beforeEach(() => {
    defaultProps = {
      handleSignUpSubmit: jest.fn(),
      handleCardFlip: jest.fn(),
      handleChange: jest.fn()
    }
    mockSignUpFormState = {
      flashMessage: null,
      loading: false,
      error: null,
      user: true,
    }
    mockSignUpFormActions = { SIGN_IN: jest.fn() }
    mockSignUpFormContext = jest.spyOn(React, 'useContext');
  })

  it("should display the form labels", () => {

    mockSignUpFormContext.mockImplementation(() => {
      mockSignUpFormState,
      mockSignUpFormActions
    })

    const rendered = render(<SignUpForm />)

    // const rendered = new SignUpForm.create(
    //   <FlashContext>
    //     <SignUpForm />
    //   </FlashContext>
    // )
    
    
    expect(rendered.getByTestId("signUpTitle")).toBeTruthy()
    expect(rendered.getByTestId("signUpLink")).toBeTruthy()
  })

  // it("should call handleSignUpClick when signUp button is clicked", () => {
  //   const rendered = render(<SignUpForm />)

  //   fireEvent.click(rendered.getByTestId("signUpLink"))

  //   expect(defaultProps.handleSubmitClick).toHaveBeenCalledTimes(1)
    
  // })

})