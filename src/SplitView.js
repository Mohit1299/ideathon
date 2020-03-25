import React from "react";
import { Component } from "react";
import './App.css'
import './card.js'
import HorizontalLabelPositionBelowStepper from "./stepper";


class SplitView extends Component {
  constructor() {
    super();

    this.state = {
      leftcount: 0,
      rightcount: 0
    };
  }

  render() {
    return (
      <div class="UpperImage">
        
          <div className="UpperImage">
            <img src="splash.png" alt="Afour Technologies" ></img>
          </div>
          
        
            
        
            <br></br>
            <HorizontalLabelPositionBelowStepper></HorizontalLabelPositionBelowStepper>
            

          
          
        
        
        </div>
    );
  }
}
export default SplitView;
