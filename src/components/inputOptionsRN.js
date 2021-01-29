import React, { Component } from 'react';
import rnImg5 from '../images/IMG_9881.PNG';

class InputOptionsRN extends Component {
    render() {
        return (
            <div className= "inputOptionsRN">
                <h1>Input Options</h1>
                <img src={rnImg5} alt="Input Options" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>User input options include drop down menu choices that can be filtered with text input.</p>
            </div>
        ) 
    } 
}

export default InputOptionsRN;