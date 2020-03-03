import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';
import { Button,Switch} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      maxwidth: 500 ,
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    checkedA: false,
  });


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const [value, setValue] = React.useState();

  return (
    <div className={classes.form} >
      <img id="photo" src="identity.jpg" alt="Man"></img>
      <br></br>
      <Button id = "capture" variant="contained" color="primary">Take Photo</Button>
      <br></br>
      <TextField placeholder="Enter your Name" id="outlined-name" label="Name" variant="outlined" />
      <br></br>
      <TextField placeholder="Enter phone number" id="outlined-phone" label="Phone" value={value} onChange={setValue} variant="outlined"/>
      <br></br>
      <TextField placeholder="Enter Reporting Person" id="outlined-phone" label="Reporting Person" value={value} onChange={setValue} variant="outlined"/>  
      <br></br>
      <TextField placeholder="Enter Purpose" id="outlined-phone" label="Purpose" value={value} onChange={setValue} variant="outlined"/> 
      <br></br>
      <p>Do you Have any Electronics Item<br></br>(If yes please Mention)
      
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}/>  
      </p>
      {state.checkedA === true ? <TextField placeholder="Mention Electronics" id="outlined-phone" label="Electronics" value={value} onChange={setValue} variant="outlined"/> : ''}
      <br></br>
      <Button id = "capture" variant="contained" color="primary">Submit</Button>
      <br></br>
    </div>
  );
}
