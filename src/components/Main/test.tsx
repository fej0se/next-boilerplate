import { render, screen } from '@testing-library/react'

import Test from '.'

describe('<Test />', () => {
  it('should render the heading', () => {
    const { container } = render(<Test />)

    expect(
      screen.getByRole('heading', { name: /This is a component test/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
