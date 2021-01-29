import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import MyImg from '../images/IMG_9143.jpeg';

class AboutMe extends Component {
    render() {
        return (
            <div style={{width: '100%', height: 'auto', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                    
                        <img 
                        src={MyImg}
                        alt="MyImage"
                        className="my-img"
                        />

                        <div className="about-text">
                            <p>My name is Kevin Terwelp.  I graduated from the University of Houston 
                            with a Bachelor of Science in Computer Science Degree in December 2020.  I am excited to begin my new 
                            career.  I am actively searching for a full-time position related to Software Development, Software Engineering 
                            or similar role to begin this journey.</p>  
                            
                            <p>I grew up in Kansas City, Missouri and moved to San Diego, 
                            California after obtaining my vocational nursing license.  After deciding to expand my
                            education, I relocated to Houston, Texas to be near my family while I obtained my degree.  
                            I moved back to the San Diego area in December 2020.  </p>

                            <p>I have been a Licensed Vocational Nurse (LVN) for over 13 years.  In recent years, I discovered
                            a passion for technology and computer science.  This led to a new hobby of programming as well as a 
                            decision to obtain a computer science education.  In addition to my formal education for computer science, I taught myself how 
                            to create websites, create mobile applications and connect both of them to databases.  To improve my full stack developer skills, 
                            I developed my own applications including an iOS mobile application and React Native mobile application.  Please visit my "Projects" 
                            webpage to learn more about these endeavors.</p>

                            <p>Thank you for visiting my website!  Please reach out to me if you have any opportunities that fit my
                            career goals.  My email is <a href="mailto: kterwelp@me.com" target="_blank" rel="noopener noreferrer">kterwelp@me.com</a>. </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;