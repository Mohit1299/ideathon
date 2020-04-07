import React, { useState } from 'react';
import Form1 from './form1';
import Form2 from './form2try';
import Photo from './webcam';
import './App.css'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
function MasterForm(props){
    
  const [currentStep,setCurrentStep] = useState(1);

  
  const  handleChange = event => {
      const {name, value} = event.target
      value(name);    
    }
     
  const  handleSubmit = event => {
      let currentStep = 1
      setCurrentStep(currentStep);
    }
    
  const  _next = () => {
      let localcurrentStep = currentStep
      localcurrentStep = localcurrentStep >= 2? 3: localcurrentStep + 1
     setCurrentStep(localcurrentStep);
    }
      
  const _prev = () => {
      let localcurrentStep = currentStep
      localcurrentStep = localcurrentStep <= 1? 1: localcurrentStep - 1
      setCurrentStep(localcurrentStep);
    }
  
  /*
  * the functions for our button
  */
   function previousButton  () {
    let localcurrentStep = currentStep;
    if(localcurrentStep !==1){
      return (
          
        <button 
          className="btn btn-secondary" 
          type="button" onClick={_prev}>
         <FaArrowLeft/> Previous
        </button>
        
      )
    }

    if(localcurrentStep ===1){
        return (
            
          <button disabled
            className="btn btn-secondary" 
            type="button" onClick={_prev}>
           <FaArrowLeft/> Previous
          </button>
          
        )
      }
    
    return null;
  }
  
  const nextButton = () => {
    let localcurrentStep = currentStep
    if(localcurrentStep <3){
      return (
          
        <button 
          className="btn btn-primary" 
          type="button" onClick={_next}>
        Next <FaArrowRight/>
        </button> 
              
      )
    }
    if(localcurrentStep ===3){
        return (
            
          <button 
            className="btn btn-primary" 
            type="button" onClick={handleSubmit}>
          Submit 
          </button> 
               
        )
      }
    return null;
  }
    
   
      return (
        
        <React.Fragment>
           
        <h2><span>{currentStep}</span></h2>
  
        <br></br>
        <form onSubmit={handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={currentStep} 
            handleChange={handleChange}
          />
          <Step2 
            currentStep={currentStep} 
            handleChange={handleChange}
          />
          <Step3 
            currentStep={currentStep} 
            handleChange={handleChange}
          />

        <br></br>
        {previousButton()}
        &nbsp;
          {nextButton()}
          
        
  
        </form>
        
        </React.Fragment>
      );
    }
  
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
        <div>
          <br></br>
          <p style={{fontSize:'xx-large'}}>Enter Details</p>
          <br></br>
            <Form1/>
        </div>
      
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div>
        <br></br>
        <p style={{fontSize:'xx-large'}}>Enter Device Details</p>
          <br></br>
      <Form2/>
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <div>
        <br></br>
        <p style={{fontSize:'xx-large'}}>Take Photo</p>
          <br></br>
      <Photo/>
      </div>
    );
  }
  
 export default MasterForm;
