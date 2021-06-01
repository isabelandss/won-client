import { Meta, Story } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'heading 1',
    subtitle: 'heading 2',
    buttonLabel: 'button label',
    buttonLink: 'button link',
    backgroundImage: '/img/red-load-img.png',
    floatImage: '/img/red-load-float.png',
  },
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
