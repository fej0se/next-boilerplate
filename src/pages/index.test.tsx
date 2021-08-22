import { render } from '@testing-library/react'

import Home from '.'

describe('<Test />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
