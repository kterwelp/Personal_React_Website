import React, { Component } from 'react';
import iosImg1 from '../images/IMG_5911.jpeg';

class LaunchScreen extends Component {
    render() {
        return (
            <div className= "launchScreen">
                <h1>Launch Screen</h1>
                <img src={iosImg1} alt="Launch Screen" height="600" width="425"/>
                <p style={{fontSize: '20px'}}>This screen briefly appears when the application loads.</p>
            </div>
        ) 
    } 
}

export default LaunchScreen;