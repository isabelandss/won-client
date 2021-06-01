import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
}

describe('<GameCard />', () => {
  test('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  test('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  test('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through',
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through',
    })
  })

  test('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  test('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  test('should render ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="ribbon"
        ribbonColor="primary"
        ribbonSize="small"
      />,
    )

    const ribbon = screen.getByText(/ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.primary,
      height: '2.6rem',
    })
  })
})
