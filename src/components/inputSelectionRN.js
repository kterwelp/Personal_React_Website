import React, { Component } from 'react';
import rnImg3 from '../images/IMG_9882.PNG';

class InputSelectionRN extends Component {
    render() {
        return (
            <div className= "inputSelectionRN">
                <h1>Input Selection</h1>
                <img src={rnImg3} alt="Input Selection" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>After users select an input option, the choice appears as shown above.</p>
            </div>
        ) 
    } 
}

export default InputSelectionRN;