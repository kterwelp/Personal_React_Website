import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rnImg1 from '../images/IMG_9879.PNG';
import rnImg2 from '../images/IMG_9880.PNG';
import rnImg3 from '../images/IMG_9882.PNG';
import rnImg4 from '../images/IMG_9886.PNG';
import rnImg5 from '../images/IMG_9881.PNG';
import rnImg6 from '../images/IMG_9887.PNG';
import rnImg7 from '../images/IMG_9883.PNG';
import rnImg8 from '../images/IMG_9884.PNG';
import rnImg9 from '../images/IMG_9885.PNG';

class ProjectClassApp extends Component {
    render() {
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
          };

        return (
            <div>
                <div className="ios-text">
                    <h1>React Native Project</h1>
                    <p style={{marginBottom: '10px'}}>Description:  This is a React Native mobile application I created for a family member.  
                        The targeted user is a behavioral educator in secondary education.  The user can log the start 
                        time and finish time for each day.  The user can also log the time for various activities 
                        throughout the day including student interventions, meetings with parents, education for teachers 
                        and completion of documentation.  The development of this project is ongoing.</p>

                    <p>Frontend:  React Native</p>
                    <p>Backend:  Bluehost, MySQL and PHP</p>

                    <p style={{textAlign: 'center'}}>(Click on pictures below to enlarge)</p>
                </div>

               <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    <div className= "mainMenuScreenRN">
                            <Link to="/mainMenuRN">
                                <img src={rnImg1} alt="Main Menu Screen" height="300" width="175"/>
                            </Link>
                        <p>Main Menu Screen</p>
                        <p>Users can navigate through the application on this screen.</p>
                    </div>
                    
                    <div className="logActivityScreenRN">
                        <Link to="/logActivityRN">
                            <img src={rnImg2} alt="Log Activity Screen" height="300" width="175"/>
                        </Link> 
                        <p>Log Activity Screen</p>
                        <p>Users can begin, end or continue the day on this screen after choosing the school.</p>
                    </div>

                    <div className="inputOptionsRN">
                        <Link to="/inputOptionsRN">
                            <img src={rnImg5} alt="Input Options" height="300" width="175"/>
                        </Link>
                        <p>Input Options</p>
                        <p>User input options include drop down menu choices that can be filtered with text input.</p>
                    </div>
                    
                    <div className="inputSelectionRN">
                        <Link to="/inputSelectionRN">
                            <img src={rnImg3} alt="Input Selection" height="300" width="175"/>
                        </Link>
                        <p>Input Selection</p>
                        <p>After users select an input option, the choice appears as shown above.</p>
                    </div>
                    
                    <div className="logFormScreenRN">
                        <Link to="/logFormRN">
                            <img src={rnImg4} alt="Log Form Screen" height="300" width="175"/>
                        </Link>
                        <p>Log Form Screen</p>
                        <p>Users can input activities completed on this screen.</p>
                    </div>
                    
                    <div className="userInputRN">
                        <Link to="/userInputRN">
                            <img src={rnImg6} alt="User Input" height="300" width="175"/>
                        </Link>
                        <p>User Input</p>
                        <p>User input dictates what information will appear in the next input box to allow for multiple forms.</p>
                    </div>

                    <div className="timeEntryRN">
                        <Link to="/timeEntryRN">
                            <img src={rnImg7} alt="Time Entry" height="300" width="175"/>    
                        </Link>
                        <p>Time Entry</p>
                        <p>Users can choose the current date and time or input it manually.</p>
                    </div>
                    
                    <div className="manualTimeEntryRN">
                        <Link to="/manualTimeEntryRN">
                            <img src={rnImg8} alt="Manual Time Entry" height="300" width="175"/>
                        </Link>
                        <p>Manual Time Entry</p>
                        <p>After a user chooses the date and time manually, it appears as shown above.</p>
                    </div>

                    <div className="currentTimeEntryRN">
                        <Link to="/currentTimeEntryRN">
                            <img src={rnImg9} alt="Current Time Entry" height="300" width="175"/>
                        </Link>
                        <p>Current Time Entry</p>
                        <p>After a user chooses the "Current Date and Time" option, it appears as shown above.</p>
                    </div>

                </Carousel>;

            </div>
        )
    }
}

export default ProjectClassApp;