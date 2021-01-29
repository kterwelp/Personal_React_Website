import React, { Component } from 'react';
import rnImg4 from '../images/IMG_9886.PNG';

class LogFormRN extends Component {
    render() {
        return (
            <div className= "logFormScreenRN">
                <h1>Log Form Screen</h1>
                <img src={rnImg4} alt="Log Form Screen" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>Users can input activities completed on this screen.</p>
            </div>
        ) 
    } 
}

export default LogFormRN;