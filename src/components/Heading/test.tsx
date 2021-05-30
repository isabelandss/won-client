import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Heading from '.'
import theme from 'styles/theme'

describe('<Heading />', () => {
  test('should render a white heading by default', () => {
    renderWithTheme(<Heading>lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      color: theme.colors.white,
    })
  })

  test('should render a black when color is passed', () => {
    renderWithTheme(<Heading color="black">lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      color: theme.colors.black,
    })
  })

  test('should render a left line', () => {
    renderWithTheme(<Heading lineLeft>lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`,
    })
  })

  test('should render a bottom line', () => {
    renderWithTheme(<Heading lineBottom>lorem ipsum</Heading>)
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i }),
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after',
    })
  })

  test('should render line with primary color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        lorem ipsum
      </Heading>,
    )
    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`,
    })

    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after',
      },
    )
  })

  test('should render line with secondary color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        lorem ipsum
      </Heading>,
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`,
    })

    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after',
      },
    )
  })

  test('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'font-size': '1.6rem',
    })

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i }),
    ).toHaveStyleRule('width', '3rem', { modifier: '::after' })
  })
})
