import React, { Component } from 'react';
import rnImg3 from '../images/IMG_9879.PNG';

class MainMenuRN extends Component {
    render() {
        return (
            <div className= "mainMenuScreenRN">
                <h1>Main Menu Screen</h1>
                <img src={rnImg3} alt="Main Menu Screen" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>Users can navigate through the application on this screen.</p>
            </div>
        ) 
    } 
}

export default MainMenuRN;