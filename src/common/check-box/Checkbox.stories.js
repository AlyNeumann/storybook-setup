import React from "react";
import Checkbox from './Checkbox';

export default {
  title: "Mui/Checkbox",
  component: Checkbox,
  argTypes: {
    onClick: { action: 'clicked'}
  }
};

const Template = args => <Checkbox {...args}/>

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
