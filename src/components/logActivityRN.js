import React, { Component } from 'react';
import rnImg2 from '../images/IMG_9880.PNG';

class LogActivityRN extends Component {
    render() {
        return (
            <div className= "logActivityScreenRN">
                <h1>Log Activity Screen</h1>
                <img src={rnImg2} alt="Log Activity Screen" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>Users can begin, end or continue the day on this screen after choosing the school.</p>
            </div>
        ) 
    } 
}

export default LogActivityRN;