import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuItems from './MenuItems';
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const items = [
      'Overview',
      'Porfolio',
      'Competencies',
      'Engagements Completed',
      'Endorsements',
      'Past Interviews',
      'Contact Information'
  ]

  //TODO: add uuid key instead of item

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
            { items.map(item => {
                return <MenuItems item={item} key={item}/>
            })}
        </MenuList>
      </Paper>
    </div>
  );
}
