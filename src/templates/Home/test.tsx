import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    /**
     * menu
     */
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    /**
     * footer
     */
    expect(
      screen.getByRole('heading', { name: /follow us/i }),
    ).toBeInTheDocument()

    /**
     * headings
     */
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument()

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
  })
})
