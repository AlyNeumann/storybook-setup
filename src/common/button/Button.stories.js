import React from "react";
import { Button } from "./Button";
import Center from "../center/Center";

export default {
  title: "Button",
  component: Button,
decorators: [story => <Center>{story()}</Center>]
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Small = () => <Button variant="small">Small</Button>;
export const Large = () => <Button variant="large">Large</Button>;

//testing Controls
export const Basic = (args) => <Button variant="primary" {...args}>testing controls</Button>;
Basic.args = { label: 'hello' };
