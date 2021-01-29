import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import MyImg from '../images/IMG_9143.jpeg';
import Coursework from './coursework';

class Resume extends Component {

    constructor(props) {
        super(props);
        this.jobDescriptionMH = [
            "Detail oriented skills used to correct errors in clinician documentation", 
            "Created reports to improve the quality of care",
            "Collaborated with team members to improve policies and procedures"
        ];

        this.jobDescriptionSH = [
            "Educated patients and families about hospice services", 
            "Prepared patient records for admission visits",
            "Obtained physician orders for patients in preparation for admission",
            "Scheduled evaluation and admission visits for patients"
        ];

        this.jobDescriptionSH2 = [
            "Extensive experience used for multiple roles throughout Sharp Hospice", 
            "Collaborated with physicians to maintain comfort for patients at end of life",
            "Educated patients and families about hospice services",
            "Implemented the plan of care for patients on hospice services"
        ];

    }


    render() {
        return (
            <div>
                <Grid>
                    <Cell className='resume-left-col' col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={MyImg}
                                alt="avatar"
                                style={{height: '250px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '1em', fontFamily: 'Playfair Display', fontWeight: 'bold'}}>Kevin Terwelp</h2>
                        <h4 style={{color: '#63686e', fontFamily: 'Playfair Display', fontWeight: 'bold'}}>Computer Science Graduate</h4>
                        <h4 style={{color: '#63686e', fontFamily: 'Playfair Display', fontWeight: 'bold'}}>Licensed Vocational Nurse</h4>
                        <hr style={{borderTop: '3px solid darkblue', width: '50%'}}/>
                        <p style={{fontFamily: 'Playfair Display', fontSize: '16px', color: 'black'}}>I am actively searching for a Software Development, Software Engineering or similar role related to my computer science degree.</p>
                        <hr style={{borderTop: '3px solid darkblue', width: '50%'}}/>
                        <h5>Email</h5>
                        <a href="mailto: kterwelp@me.com" target="_blank" rel="noopener noreferrer">kterwelp@me.com</a>
                        <h5>LinkedIn</h5>
                        <a href="https://www.linkedin.com/in/kevin-terwelp-11a571105/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/kevin-terwelp-11a571105/</a>
                        <hr style={{borderTop: '3px solid darkblue', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>

                        <h2>Skills</h2>

                        <Skills 
                            skill1="Bluehost"
                            years1={3}
                            skill2="C++"
                            years2={4}
                            skill3="GitHub"
                            years3={3}
                        />

                        <Skills 
                            skill1="Java"
                            years1={4}
                            skill2="JavaScript"
                            years2={3}
                            skill3="MySQL"
                            years3={3}
                        />

                        <Skills 
                            skill1="PHP"
                            years1={3}
                            skill2="Python"
                            years2={3}
                            skill3="React"
                            years3={2}
                        />

                        <Skills 
                            skill1="REST API"
                            years1={3}
                            skill2="SVN"
                            years2={3}
                            skill3="Swift"
                            years3={3}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Education</h2>

                        <Education 
                            startYear={"Aug " + 2017}
                            endYear={"Dec " + 2020}
                            degree={"Bachelor of Science in Computer Science"}
                            schoolName="University of Houston - Houston, Texas"
                            minor="Minor:  Mathematics"
                            gpa="GPA:  3.94"
                            honors="Latin Honors:  Summa Cum Laude"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        
                        <h2>Relevant Coursework</h2>

                        <Coursework
                            course1="Algorithms and Data Structures"
                            course2="Fundamentals of Software Engineering"
                            course3="Software Development Practices"
                            course4="Operating Systems"
                            course5="Software Design"
                            course6="Design of File and Database Systems"
                            course7="Ubiquitous Computing - iOS Development"
                            course8="Entrepreneurship for Computer Science"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Work Experience</h2>

                        <Experience 
                            startYear={"Dec " + 2020}
                            endYear={"Present"}
                            jobName1="Licensed Vocational Nurse"
                            employer="Sharp Hospice"
                            employerLoc="La Mesa, California"
                            jobDescription={this.jobDescriptionSH2}
                        />

                        <Experience 
                            startYear={"Jan " + 2016}
                            endYear={"Dec " + 2020}
                            jobName1="Quality Program Coordinator"
                            jobName2="Licensed Vocational Nurse"
                            employer="Memorial Hermann Home Health/Hospice"
                            employerLoc="Houston, Texas"
                            jobDescription={this.jobDescriptionMH}
                        />

                        <Experience 
                            startYear={"Mar " + 2015}
                            endYear={"Jan " + 2016}
                            jobName1="Intake Coordinator"
                            jobName2="Licensed Vocational Nurse"
                            employer="Sharp Hospice"
                            employerLoc="La Mesa, California"
                            jobDescription={this.jobDescriptionSH} 
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;