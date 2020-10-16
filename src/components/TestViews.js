import React from "react";
import MuiButton from "../common/mui-button/MuiButton";
import Box from "@material-ui/core/Box";
import Center from "../common/center/Center";
import Menu from "../common/menu/Menu";
import { useTheme } from "@material-ui/core/styles";

const TestView = () => {
  const theme = useTheme();
  console.log(theme)
  return (
    <Center>
      <Box container="true" bgcolor="primary">
        <MuiButton bgcolor="secondary" color="primary">
          Primary
        </MuiButton>
        <MuiButton color="secondary">Secondary</MuiButton>
      </Box>
      <Menu />
    </Center>
  );
};

export default TestView;
