import { render, screen } from '@testing-library/react'

import Test from '.'

describe('<Test />', () => {
  it('should render the heading', () => {
    const { container } = render(<Test />)

    expect(
      screen.getByRole('heading', { name: /This is a component test/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Next.js boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render color correctly', () => {
    const { container } = render(<Test />)

    expect(container.firstChild).toHaveStyle({ color: '#000000' })
  })

  it('should render background-color correctly', () => {
    const { container } = render(<Test />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#fefefe' })
  })
})
