import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  test('should render the text correctly', () => {
    renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  test('should render with the primary color as default', () => {
    renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      backgroundColor: theme.colors.primary,
    })
  })

  test('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    })
  })

  test('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    })
  })

  test('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    })
  })
})
