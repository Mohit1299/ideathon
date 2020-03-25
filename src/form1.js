import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Select from 'react-select';
import {groupedOptions,groupedContactOptions} from './data.js';
import 'bootstrap/dist/css/bootstrap.css'

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
  
  


  return (
    <div className={classes.form} >
      <Select className="col-md-2 col-offset-8 center"  placeholder="Select Purpose" options={groupedOptions}/>
      <br></br>
      <TextField placeholder="Enter Your Name" id="outlined-name" label="Name" variant="outlined" required />
      <br></br>
      <TextField placeholder="Enter Phone Number" id="outlined-phone" label="Phone" variant="outlined" required/>
      <br></br>
      <Select className="col-md-2 col-offset-8 center"  placeholder="Choose Contact Person" options={groupedContactOptions}/>
      <br></br>
      
    </div>
  );
}
