import React from "react";
import Info from './Icons';


export default {
  title: "Mui/InfoIcon",
  component: Info,
};

export const Small = () => <Info variant="primary" color="primary" fontSize="small">Primary</Info>;
export const Medium = () => <Info variant="primary" color="primary">Primary</Info>;
export const Large = () => <Info variant="primary" color="primary" fontSize="large">Primary</Info>;
export const Secondary = () => <Info variant="secondary" color="secondary">Secondary</Info>;
export const LargeBlack = () => <Info variant="secondary" fontSize="large" ></Info>;


