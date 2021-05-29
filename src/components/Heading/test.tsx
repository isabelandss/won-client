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
      'border-left': `0.7rem solid ${theme.colors.secondary}`,
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
})
