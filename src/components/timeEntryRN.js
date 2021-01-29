import React, { Component } from 'react';
import rnImg7 from '../images/IMG_9883.PNG';

class TimeEntryRN extends Component {
    render() {
        return (
            <div className= "timeEntryRN">
                <h1>Time Entry</h1>
                <img src={rnImg7} alt="Time Entry" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>Users can choose the current date and time or input it manually. <br/>
                                              If the user clicks the button "Choose Date/Time," the date and time picker appears as shown above.</p>
            </div>
        ) 
    } 
}

export default TimeEntryRN;