import React, { useState } from "react";
import MuiButton from "../common/mui-button/MuiButton";
import Box from "@material-ui/core/Box";
import Center from "../common/center/Center";
import Menu from "../common/menu/Menu";
import Info from '../common/icons/Icons'
// import CheckboxLabels from '../common/check-box/Checkbox';
import CheckboxGroup from '../common/check-box/CheckboxGroup';
import { useTheme } from "@material-ui/core/styles";

const TestView = () => {
  const theme = useTheme();
  console.log(theme);

  const [state, setState] = useState(false);

  const handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!state) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <Center>
      <Box container="true" bgcolor="primary">
        <MuiButton onClick={handleClick} bgcolor="secondary" color="primary">
          {state ? <div>True</div> : <div>False</div>}
        </MuiButton>
      </Box>
      <Menu />
      <Info color="primary" fontSize="large"/>
      {/* <CheckboxLabels/> */}
      <CheckboxGroup/>
    </Center>
  );
};

export default TestView;
