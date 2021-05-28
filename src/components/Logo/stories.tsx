import { Meta, Story } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['large', 'normal'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['white', 'black'],
    },
  },
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
