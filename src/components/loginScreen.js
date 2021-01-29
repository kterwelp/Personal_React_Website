import React, { Component } from 'react';
import iosImg2 from '../images/IMG_5933.PNG';

class LoginScreen extends Component {
    render() {
        return (
            <div className= "loginScreen">
                <h1>Login Screen</h1>
                <img src={iosImg2} alt="Login Screen" height="600" width="425"/>
                <p style={{fontSize: '20px'}}>Users can login on this screen.</p>
            </div>
        ) 
    } 
}

export default LoginScreen;