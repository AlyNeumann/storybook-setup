import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels(props) {
  const { children, ...rest } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          name="checkedB"
          color="primary"
          id="checkbox" 
          className={`mui-checkbox`} 
          {...rest}
        />
      }
      label={props.label}
    />
  );
}
