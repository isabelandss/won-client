import { Meta, Story } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'
import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    items,
  },
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
