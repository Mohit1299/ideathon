import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField placeholder="Enter your Name" id="outlined-name" label="Name" variant="outlined" />
      <TextField placeholder="Enter phone number" id="outlined-phone" label="Phone" value={value} onChange={setValue} variant="outlined" type="Number"/>
    </form>
  );
}
