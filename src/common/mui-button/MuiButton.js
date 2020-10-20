import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "0px",
  },
}));

export default function MuiButton(props) {
  const classes = useStyles();
  const { children, ...rest } = props;


  return (
    <Button id="button" variant="contained" className={`mui-button ${classes.root}`} {...rest}>
     {children}
    </Button>
  );
}
