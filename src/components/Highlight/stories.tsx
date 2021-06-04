import { Meta, Story } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import args from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args,
  argTypes: {
    title: {
      type: 'string',
    },
    subtitle: {
      type: 'string',
    },
    alignment: {
      type: 'select',
      options: ['right', 'left'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
