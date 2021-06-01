import 'match-media-mock'

import { render } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  test('should match snapshot', () => {
    const settings = {}
    const { container } = render(
      <Slider settings={settings}>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
        <p>item 4</p>
      </Slider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
