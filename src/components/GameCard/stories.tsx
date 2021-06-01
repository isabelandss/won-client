import { Meta, Story } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 99,99',
    ribbon: '50% off',
  },
  argTypes: {
    onFav: {
      action: 'click',
    },
    ribbonColor: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
    ribbonSize: {
      type: 'select',
      options: ['small', 'normal'],
    },
  },
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
