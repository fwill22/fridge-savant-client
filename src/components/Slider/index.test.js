import Slider from '.'
import { render} from '@testing-library/react'

describe('<slider/>', () => {
  it('should render the base elements', () => {
    const rendered = render(<Slider />)

    expect(rendered.getByTestId('slideShowSlider')).toBeTruthy()
    expect(rendered.getByTestId('slideShowDots')).toBeTruthy()

  })
})