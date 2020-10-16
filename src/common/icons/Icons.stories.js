import React from "react";
import InfoIcon from '@material-ui/icons/Info';


export default {
  title: "Mui/InfoIcon",
  component: InfoIcon,
};

export const Small = () => <InfoIcon variant="primary" color="primary" fontSize="small">Primary</InfoIcon>;
export const Medium = () => <InfoIcon variant="primary" color="primary">Primary</InfoIcon>;
export const Large = () => <InfoIcon variant="primary" color="primary" fontSize="large">Primary</InfoIcon>;
export const Secondary = () => <InfoIcon variant="secondary" color="secondary">Secondary</InfoIcon>;
export const LargeBlack = () => <InfoIcon variant="secondary" fontSize="large" ></InfoIcon>;


