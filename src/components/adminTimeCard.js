import React, { Component } from 'react';
import iosImg8 from '../images/adminTimeCard.png';

class AdminTimeCard extends Component {
    render() {
        return (
            <div className= "adminTimeCard">
                <h1>Admin User Time Card Webpage</h1>
                <img src={iosImg8} alt="Admin User Time Card Webpage" height="500" width="1200"/>
                <p style={{fontSize: '20px'}}>Admin users can manage time cards from this webpage. <br/>
                The options include filtering the data, deleting entries, or exporting the information to a spreadsheet (.csv file).</p>
            </div>
        ) 
    } 
}

export default AdminTimeCard;