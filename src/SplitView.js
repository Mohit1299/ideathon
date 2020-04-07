import React from "react";
import './App.css'
import MasterForm from "./master";


function SplitView(props) {


  
    return (

      
      <div className="UpperImage" >
        {/* style={{width:'100%',borderRight: '3px solid black',  borderLeft: '3px solid black'}}>
           */}
         
          <div className="UpperImage">
            <img src="splash.png" alt="Afour Technologies" ></img>
          </div>
          <div>
            <br></br>
            <MasterForm></MasterForm>
            <br></br>
            </div>
            
        </div>
        
    );
  }
export default SplitView;
