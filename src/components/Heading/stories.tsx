import { Meta, Story } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      type: 'select',
      options: ['small', 'medium'],
    },
    lineColor: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
    color: {
      type: 'select',
      options: ['white', 'black'],
    },
  },
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

Basic.args = {
  children: 'Most Populars',
}
