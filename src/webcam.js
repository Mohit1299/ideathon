import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class FaceEmotion extends Component{

    constructor(props){
        super(props);
        this.state = { screenshot: null }
         this.screenshot = this.screenshot.bind(this);

    }
  
    screenshot() {
        
        var screenshot = this.refs.webcam.getScreenshot();
        this.setState({screenshot: screenshot});
      }

    render(){

        return (
            <div>   
             <Webcam audio ={false} ref='webcam' height="100px" width="100px"/>
             <button onClick={this.screenshot.bind(this)}>Capture</button>
             { this.state.screenshot ? <img src={this.state.screenshot} alt="Not Captured"/> : null }
            </div>
            )
    }
}