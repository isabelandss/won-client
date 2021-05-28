import { render } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  test('should match snapshot', () => {
    const { container } = render(<Heading />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
