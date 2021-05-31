import { Meta, Story } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong></p> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'lorem ipsum',
  },
  argTypes: {
    ribbon: {
      type: 'string',
    },
    ribbonSize: {
      type: 'select',
      options: ['small', 'normal'],
    },
    ribbonColor: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Basic: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
