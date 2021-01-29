import React, { Component } from 'react';
import rnImg6 from '../images/IMG_9887.PNG';

class UserInputRN extends Component {
    render() {
        return (
            <div className= "userInputRN">
                <h1>User Input</h1>
                <img src={rnImg6} alt="User Input" height="600" width="350"/>
                <p style={{fontSize: '20px'}}>User input dictates what information will appear in the next input box to allow for multiple forms. <br/>
                                                In this example, the user has chosen "Teacher" for the type of form and "Staff
                                                Consult" for the activity.  The "Choose Teacher" input box, "Choose Time Entry" input 
                                                box and "Submit" button appeared after "Staff Consult" was chosen.</p>
            </div>
        ) 
    } 
}

export default UserInputRN;