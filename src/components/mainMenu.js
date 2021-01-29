import React, { Component } from 'react';
import iosImg3 from '../images/IMG_5935.PNG';

class MainMenu extends Component {
    render() {
        return (
            <div className= "mainMenuScreen">
                <h1>Main Menu Screen</h1>
                <img src={iosImg3} alt="Main Menu Screen" height="600" width="425"/>
                <p style={{fontSize: '20px'}}>Users can navigate through the application on this screen.</p>
            </div>
        ) 
    } 
}

export default MainMenu;