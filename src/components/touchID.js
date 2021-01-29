import React, { Component } from 'react';
import iosImg5 from '../images/IMG_5937.PNG';

class TouchID extends Component {
    render() {
        return (
            <div className= "touchID">
                <h1>Touch ID Feature</h1>
                <img src={iosImg5} alt="Touch ID Feature" height="600" width="425"/>
                <p style={{fontSize: '20px'}}>Users have the option to log in using Touch ID.</p>
            </div>
        ) 
    } 
}

export default TouchID;