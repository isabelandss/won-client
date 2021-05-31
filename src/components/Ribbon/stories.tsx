import { Meta, Story } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'lorem ipsum',
  },
  argTypes: {
    children: {
      type: 'string',
    },
    color: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      type: 'select',
      options: ['normal', 'small'],
    },
  },
} as Meta

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#e8e8e8',
    }}
  >
    <Ribbon {...args} />
  </div>
)
