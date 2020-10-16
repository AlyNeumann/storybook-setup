import React from "react";
import Center from '../src/common/center/Center';
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme1, theme2 } from "../src/theme/theme";



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
(Story) => <Center>{Story()}</Center>
];
