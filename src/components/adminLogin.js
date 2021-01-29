import React, { Component } from 'react';
import iosImg6 from '../images/adminLogin.png';

class AdminLogin extends Component {
    render() {
        return (
            <div className= "adminLogin">
                <h1>Admin User Backend Login</h1>
                <img src={iosImg6} alt="Admin Login Screen" height="600" width="400"/>
                <p style={{fontSize: '20px'}}>Admin users can login to the backend via a website.</p>
            </div>
        ) 
    } 
}

export default AdminLogin;