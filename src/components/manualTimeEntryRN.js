import React, { Component } from 'react';
import rnImg8 from '../images/IMG_9884.PNG';

class ManualTimeEntryRN extends Component {
    render() {
        return (
            <div className= "manualTimeEntryRN">
                <h1>Manual Time Entry</h1>
                <img src={rnImg8} alt="Manual Time Entry" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>After a user chooses the date and time manually, it appears as shown above. <br/>
                                              When a user clicks the "Submit" button, the date and time input by the user 
                                              will be logged with the other information on this form.</p>
            </div>
        ) 
    } 
}

export default ManualTimeEntryRN;