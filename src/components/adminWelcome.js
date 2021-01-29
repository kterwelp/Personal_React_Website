import React, { Component } from 'react';
import iosImg7 from '../images/adminWelcome.png';

class AdminWelcome extends Component {
    render() {
        return (
            <div className= "adminWelcome">
                <h1>Admin User Welcome Webpage</h1>
                <img src={iosImg7} alt="Admin User Welcome Webpage" height="600" width="1000"/>
                <p style={{fontSize: '20px'}}>Admin users can navigate the backend website from this webpage.</p>
            </div>
        ) 
    } 
}

export default AdminWelcome;