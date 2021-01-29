import React, { Component } from 'react';
import iosImg4 from '../images/IMG_5936.PNG';

class JobEntry extends Component {
    render() {
        return (
            <div className= "jobEntryScreen">
                <h1>Job Entry Screen</h1>
                <img src={iosImg4} alt="Job Entry Screen" height="600" width="425"/>
                <p style={{fontSize: '20px'}}>Users can choose the unit number and job type on this screen and click 
                "Start Job" or "Finish Job" to log the date and time for each job. <br/>  The user's current location is 
                also logged with each entry. </p>
            </div>
        ) 
    } 
}

export default JobEntry;