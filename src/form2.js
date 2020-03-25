import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Switch from '@material-ui/core/Switch'
import Select from 'react-select'
import {groupedElectronicsOptions} from './data.js'


const useStyles = makeStyles(theme => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      maxwidth: 500 ,
    },
  },

  select:{
    maxwidth : 200,
    margin:theme.spacing(1),
  },

}));

function ElectronicsTextFields(){
    const classes = useStyles();

    const [value, setValue] = React.useState();

    return(
       
        <div className={classes.form}>
        <Select isMulti className="col-md-2 col-offset-8 center"  placeholder="Select Electronics" options={groupedElectronicsOptions}/>
        <br></br>
        <TextField placeholder="Mention Electronics" id="outlined-phone" label="Electronics" value={value} onChange={setValue} variant="outlined"></TextField>
        </div>
    );
}

export default function BasicTextFields2(props) {
    const classes = useStyles();
  
  const [state, setState] = React.useState({
    checkedA: false,
  });


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  

  return (
    <div className={classes.form} >
     
      <br></br>
    
      <p>Do you Have any Electronics Item<br></br>(If yes please Mention)
      
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}/>  
      </p>
      {state.checkedA === true ? <ElectronicsTextFields></ElectronicsTextFields>: ''}
    
    </div>
  );
}


