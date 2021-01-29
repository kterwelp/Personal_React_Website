import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import iosImg1 from '../images/IMG_5911.jpeg';
import iosImg2 from '../images/IMG_5933.PNG';
import iosImg3 from '../images/IMG_5935.PNG';
import iosImg4 from '../images/IMG_5936.PNG';
import iosImg5 from '../images/IMG_5937.PNG';
import iosImg6 from '../images/adminLogin.png';
import iosImg7 from '../images/adminWelcome.png';
import iosImg8 from '../images/adminTimeCard.png';



class ClickItFixIt extends Component {
    
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
                    <h1>iOS Project</h1>
                    <p style={{marginBottom: '10px'}}>Description:  This is an iOS mobile application I created for a family member.  
                        The targeted user is a maintenance worker at an apartment complex.  The user can
                        log the start time and finish time for each job as well as the job type and the 
                        unit number where the job was completed.  The application also logs the user's
                        current location to make certain the user is on site.</p>

                    <p style={{marginTop: '10px'}}>Admin users are able to manage the data on a separate website for the backend.  The
                    website allows admin users to delete incorrect job entries.  The admin users can also
                    create a spreadsheet (.csv file) to save the job entries and manipulate the data for payroll and other categories of interest.</p>

                    <p>Frontend:  Swift and HTML/CSS/Bootstrap (admin user website)</p>
                    <p>Backend:  Bluehost, MySQL, PHP and REST APIs</p>

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
                    <div className= "launchScreen">
                            <Link to="/launchScreen">
                                <img src={iosImg1} alt="Launch Screen" height="300" width="200"/>
                            </Link>
                        <p>Launch Screen</p>
                        <p>This screen briefly appears when the application loads.</p>
                    </div>
                    
                    <div className="loginScreen">
                        <Link to="/loginScreen">
                            <img src={iosImg2} alt="Login Screen" height="300" width="200"/>
                        </Link> 
                        <p>Login Screen</p>
                        <p>Users can login on this screen.</p>
                    </div>

                    <div className="touchID">
                        <Link to="/touchID">
                            <img src={iosImg5} alt="Touch ID Example" height="300" width="200"/>
                        </Link>
                        <p>Touch ID Feature</p>
                        <p>Users can log in using Touch ID.</p>
                    </div>
                    
                    <div className="mainMenuScreen">
                        <Link to="/mainMenu">
                            <img src={iosImg3} alt="Main Menu Screen" height="300" width="200"/>
                        </Link>
                        <p>Main Menu Screen</p>
                        <p>Users can navigate through the application on this screen.</p>
                    </div>
                    
                    <div className="jobEntryScreen">
                        <Link to="/jobEntry">
                            <img src={iosImg4} alt="Job Entry Screen" height="300" width="200"/>
                        </Link>
                        <p>Job Entry Screen</p>
                        <p>Users can log each job on this screen.</p>
                    </div>
                    
                    <div className="adminLogin">
                        <Link to="/adminLogin">
                            <img src={iosImg6} alt="Admin Login Website" height="300" width="180"/>
                        </Link>
                        <p>Admin User Backend Login</p>
                        <p>Admin users can login to the backend via a website.</p>
                    </div>

                    <div className="adminWelcome">
                        <Link to="/adminWelcome">
                            <img src={iosImg7} alt="Admin Welcome Webpage" height="300" width="425"/>    
                        </Link>
                        <p>Admin User Welcome Webpage</p>
                        <p>Admin users can navigate the backend website from this webpage.</p>
                    </div>
                    
                    <div className="adminTimeCard">
                        <Link to="/adminTimeCard">
                            <img src={iosImg8} alt="Admin Time Card Webpage" height="300" width="425"/>
                        </Link>
                        <p>Admin User Time Card Webpage</p>
                        <p>Admin users can manage time cards from this webpage.</p>
                    </div>

                </Carousel>;

            </div>
        )
    }
}

export default ClickItFixIt;