import { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    icon: {
      type: '',
    },
  },
} as Meta

export const Medium: Story = (args) => <Button {...args} />

Medium.args = {
  children: 'Button',
  size: 'medium',
}

export const Small: Story = (args) => <Button {...args} />

Small.args = {
  children: 'Button',
  size: 'small',
}

export const Large: Story = (args) => <Button {...args} />

Large.args = {
  children: 'Button',
  size: 'large',
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Button',
  icon: <AddShoppingCart />,
}
