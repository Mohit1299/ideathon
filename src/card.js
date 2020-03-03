import React, {useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BasicTextFields from './form';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SplitButton from './Expansion';
import { blue } from '@material-ui/core/colors';
import './App.css'
import { Button } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: blue,
  },
});

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

export default function CenteredTabs() {


    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [buttonValue, setButtonValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = index => {
      setValue(index);
    };

    // const handleInterview = () => {
    //   <BasicTextFields/>
    // }
  
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="blue"
        textColor="primary"
        centered
        variant = "fullWidth"
      >
        <Tab label="Interview" {...a11yProps(0)} />
        <Tab label="Others" {...a11yProps(1)}/>
      </Tabs>

      <SwipeableViews
    axis={theme.direction === 'rtl' ? 'y-reverse' : 'x'}
    index={value}
    onChangeIndex={handleChangeIndex}
  >
    
      <TabPanel value={value} index={0} dir={theme.direction}>
      
       <div className="forms"><BasicTextFields /></div>
       
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SplitButton buttonVal={buttonValue} setButtonVal={(val) => setButtonValue(val)}/>       
          {/* <BasicTextFields/> */}
          {buttonValue === 0 ? (<div><br></br><Button variant="outlined" color="primary" >
        Visitor Form
      </Button><BasicTextFields/> </div>) : ''}
      {buttonValue === 1 ? (<div><br></br><Button variant="outlined" color="primary">
        Vendor Form
      </Button><BasicTextFields/> </div>) : ''}
      {buttonValue === 2 ? (<div><br></br><Button variant="outlined" color="primary">
        Delivery Form
      </Button><BasicTextFields/> </div>) : ''}
         
        </TabPanel>
        
      </SwipeableViews>
    </Paper>
  );
}
