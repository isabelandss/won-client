import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'
import theme from 'styles/theme'

describe('<Button />', () => {
  test('should render a medium button by default', () => {
    const { container } = renderWithTheme(<Button>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render a small button', () => {
    renderWithTheme(<Button size="small">lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    })
  })

  test('should render a large button', () => {
    renderWithTheme(<Button size="large">lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    })
  })

  test('should render a button with full width', () => {
    renderWithTheme(<Button fullWidth>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      width: '100%',
    })
  })

  test('should render a minimal button', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        lorem ipsum
      </Button>,
    )

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      background: 'none',
      color: theme.colors.primary,
    })

    expect(
      screen.getByRole('button', { name: /lorem ipsum/i }),
    ).toHaveStyleRule('background', 'none', { modifier: ':hover' })
  })

  test('should render a button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>
        lorem ipsum
      </Button>,
    )

    expect(screen.getByText(/lorem ipsum/)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  test('shold render Button as a link', () => {
    // const { debug, container } = renderWithTheme(
    //   <Button as="a" href="/link">
    //     lorem ipsum
    //   </Button>,
    // )

    // debug(container)

    renderWithTheme(
      <Button as="a" href="/link">
        lorem ipsum
      </Button>,
    )

    expect(screen.getByRole('link', { name: /lorem ipsum/i })).toHaveAttribute(
      'href',
      '/link',
    )
  })
})
