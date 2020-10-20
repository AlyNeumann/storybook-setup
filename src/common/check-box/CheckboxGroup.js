import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import CheckboxLabels from "./Checkbox";

const CheckboxGroup = () => {
  return (
    <FormGroup>
        <h3>Hourly Rate</h3>
      <CheckboxLabels label="$5 to $10"/>
      <CheckboxLabels label="$10 to $20"/>
      <CheckboxLabels label="$20 to $30"/>
      <CheckboxLabels label="$30 to $40"/>
    </FormGroup>
  );
};

export default CheckboxGroup;
