import { Meta, Story } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    labelColor: {
      type: 'select',
      options: ['black', 'white'],
    },
    onCheck: {
      action: 'checked',
    },
  },
} as Meta

export const Basic: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} isChecked />
)
