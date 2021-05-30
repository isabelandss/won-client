import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  test('should render the contact column', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument()
  })

  test('should render the follow us column', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /follow us/i }),
    ).toBeInTheDocument()
  })

  test('should render the links column', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
  })

  test('should render the location column', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByRole('heading', { name: /location/i }),
    ).toBeInTheDocument()
  })
})
