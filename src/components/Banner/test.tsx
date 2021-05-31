import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong></p> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
}

describe('<Banner />', () => {
  describe('should render correctly', () => {
    let bannerContainer: HTMLElement

    beforeEach(() => {
      const { container } = renderWithTheme(<Banner {...props} />)
      bannerContainer = container
    })

    test('should match snapshot', () => {
      expect(bannerContainer.firstChild).toMatchSnapshot()
    })

    test('should render image', () => {
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    test('should render title', () => {
      expect(screen.getByText(/defy death/i)).toBeInTheDocument()
    })

    test('should render subtitle', () => {
      expect(
        screen.getByRole('heading', {
          name: /Play the new CrashLands season/i,
        }),
      ).toBeInTheDocument()
    })

    test('should render button link', () => {
      expect(screen.getByRole('link')).toBeInTheDocument()
    })

    test('should render a ribbon', () => {
      renderWithTheme(
        <Banner
          {...props}
          ribbon="lorem ipsum"
          ribbonSize="small"
          ribbonColor="secondary"
        />,
      )

      const ribbon = screen.getByText(/lorem ipsum/i)

      expect(ribbon).toBeInTheDocument()
      expect(ribbon).toHaveStyle({
        backgroundColor: theme.colors.secondary,
        height: '2.6rem',
        fontSize: '1.2rem',
      })
    })
  })
})
