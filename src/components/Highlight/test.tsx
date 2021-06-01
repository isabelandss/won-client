import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import * as S from './styles'

import Highlight from '.'

const props = {
  title: 'heading 1',
  subtitle: 'heading 2',
  buttonLabel: 'button label',
  buttonLink: 'button link',
  backgroundImage: '/img/red-load-img.png',
}

describe('<Highlight />', () => {
  test('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /button label/i }))
  })

  test('should render background', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    })
  })

  test('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png',
    )
  })

  test('should render align right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" />,
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'",
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    })
  })

  test('should render align lefts', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />,
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'",
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    })
  })
})
