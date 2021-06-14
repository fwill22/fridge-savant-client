import WelcomeText from '.'
import { render, fireEvent } from '@testing-library/react'

describe('<WelcomeText/>', () => {

  it('should display the welcome text', () => {
    const rendered = render(<WelcomeText />)

    expect(rendered.getByText('There is nothing as creative as cooking.')).toBeTruthy()
  })
})