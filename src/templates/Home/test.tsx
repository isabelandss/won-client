import { render } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  test('should match snapshot', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
