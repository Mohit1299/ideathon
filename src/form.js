import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      maxwidth: 500 ,
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField placeholder="Enter your Name" id="outlined-name" label="Name" variant="outlined" />
      <br></br>
      <TextField placeholder="Enter phone number" id="outlined-phone" label="Phone" value={value} onChange={setValue} variant="outlined"/>
      <br></br>
      <TextField placeholder="Enter Reporting Person" id="outlined-phone" label="Reporting Person" value={value} onChange={setValue} variant="outlined"/>  
      <br></br>
      <TextField placeholder="Enter Purpose" id="outlined-phone" label="Purpose" value={value} onChange={setValue} variant="outlined"/>   
    </form>
  );
}
