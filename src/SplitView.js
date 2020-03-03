import React from "react";
import styled from "styled-components";
import { Component } from "react";
// import SplitPane from "react-split-pane";
import './App.css'
import './card.js'
import CenteredTabs from "./card";

const Wrapper = styled.div`
  .Pane1 {
    background-color:#FFF;
  }
  .Pane2 {
    background-color:#FFF;
  }
`;

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
        {/* <SplitPane split="horizontal" defaultSize="40%" class="div">  */}
          <div className="UpperImage">
            <img src="splash.png" alt="Afour Technologies" ></img>
          </div>
          <Wrapper>
        
            <div>
        
            <CenteredTabs/>

            </div>
          
          </Wrapper>
        {/* </SplitPane> */}
        </div>
    );
  }
}
export default SplitView;
