import React from "react";
import styled from "styled-components";
import { Component } from "react";
import SplitPane from "react-split-pane";
import "./App.css"

const Wrapper = styled.div`
  .Pane1 {
    background-color:#00FFFF;
  }
  .Pane2 {
    background-color:#03bb85;
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
      
        <SplitPane split="horizontal" defaultSize="40%">
          <div class="UpperImage">
            <img src="splash.png" alt="Afour Technologies" ></img>
          </div>
          <Wrapper>
        <SplitPane split="vertical" defaultSize="50%" class="Down">
          <div class="Left">
            <p>You clicked {this.state.rightcount} times</p>
            <button
              onClick={() =>
                this.setState({ rightcount: this.state.rightcount + 1 })
              }
            >
              Click me
            </button>
          </div>

          <div class="Right">
            <p>You clicked {this.state.rightcount} times</p>
            <button
              onClick={() =>
                this.setState({ rightcount: this.state.rightcount + 1 })
              }
            >
              Click me
            </button>
          </div>
          </SplitPane>
          </Wrapper>
        </SplitPane>
     
    );
  }
}
export default SplitView;
