import React,{useState}from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import './App.css';
//import Select from 'react-select';
//import {groupedOptions,groupedContactOptions} from './data.js';
import 'bootstrap/dist/css/bootstrap.css';
import {Form} from 'react-bootstrap';

// const useStyles = makeStyles(theme => ({
//   form: {
//     '& > *': {
//       margin: theme.spacing(1),
//       maxwidth: 500 ,
//     },
//   },

// }));



export default function Form1({setter}) {
  //const classes = useStyles();

  const [Person,setPerson] = useState('');
  const [Name,setName] = useState('');
  const [Phoneno,setPhoneno] = useState('');
  const [ContactPerson,setContactPerson] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(Person);
    console.log(Name);
    console.log(Phoneno);
    console.log(ContactPerson);
      }

  return (
    <Form className="text-align center"style={{width:'60%'}} onSubmit={handleSubmit} >
    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" placeholder="Select Purpose" value={Person} onChange = {event => setPerson(event.target.value)} >
      <option>Guest/Customer</option>
      <option>Visitor</option>
      <option>Interview</option>
      <option>Delivery</option>
      <option>Temporary</option>
      <option>Vendor</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="Text" placeholder="Enter Name" value={Name} onChange = {event => setName(event.target.value) } />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="Text" placeholder="Enter Phone Number" value={Phoneno} onChange = {event => setPhoneno(event.target.value) } />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" placeholder="Select Contact Person" value={ContactPerson} onChange = {event => setContactPerson(event.target.value)} >
      <option>Admin</option>
      <option>HR</option>
      <option>Employee</option>
      <option>Sys Admin</option>
    </Form.Control>
  </Form.Group>

</Form>
  );
}
