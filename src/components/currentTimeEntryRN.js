import React, { Component } from 'react';
import rnImg9 from '../images/IMG_9885.PNG';

class CurrentTimeEntryRN extends Component {
    render() {
        return (
            <div className= "currentTimeEntryRN">
                <h1>Current Time Entry</h1>
                <img src={rnImg9} alt="Current Time Entry" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>After a user chooses the "Current Date and Time" option, it appears as shown above. <br/>
                                              When a user clicks the "Submit" button, the current date and time will be logged with
                                              the other information on this form.</p>
            </div>
        ) 
    } 
}

export default CurrentTimeEntryRN;