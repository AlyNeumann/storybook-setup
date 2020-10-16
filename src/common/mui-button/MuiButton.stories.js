import React from "react";
import MuiButton from './MuiButton';

export default {
  title: "Mui/Button",
  component: MuiButton,
  argTypes: {
    onClick: { action: 'clicked'}
  }
};

const Template = args => <MuiButton {...args}/>

export const Success = Template.bind({})
Success.args = {
    color: 'primary',
    children: 'Success',
}
export const Danger = Template.bind({})
Danger.args = {
    color: 'secondary',
    children: 'Danger'
}
