import { Meta, Story } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    items: [
      {
        img: 'https://source.unsplash.com/user/willianjusten/1042x583',
        title: 'Defy death',
        subtitle: '<p>Play the new <strong>CrashLands</strong></p> season',
        buttonLabel: 'Buy now',
        buttonLink: '/games/defy-death',
        ribbon: 'lorem ipsum',
      },
      {
        img: 'https://source.unsplash.com/user/willianjusten/1042x582',
        title: 'Defy death',
        subtitle: '<p>Play the new <strong>CrashLands</strong></p> season',
        buttonLabel: 'Buy now',
        buttonLink: '/games/defy-death',
        ribbon: 'lorem ipsum',
      },
    ],
  },
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
