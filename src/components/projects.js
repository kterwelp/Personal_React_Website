import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, CardText, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };

    }

    render() {
        return (
            <div className="content">
                <Grid>
                    <Cell col={12}>
                        <div className='projects-grid'>
                            {/* iOS Project */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto',  fontFamily: 'Playfair Display', fontWeight: 'bold'}}>
                                <CardTitle style={{color: '#fff', height: '200px', justifyContent: 'center',
                                            background: 'url(https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png) center / cover'}}>iOS Project</CardTitle>
                                <CardText style={{fontSize: '16px', color: 'black'}}>
                                This iOS mobile application resembles a time clock and allows maintenance workers to log each job entry.
                                </CardText>
                                <CardActions border>
                                    <Navigation>
                                        <Link style={{fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: '16px', color: '#0d52d1', 
                                                margin: '7px'}} to="/clickItFixIt">MORE DETAILS</Link>
                                    </Navigation>
                                </CardActions>
                            </Card>

                            {/* React Project */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto',  fontFamily: 'Playfair Display', fontWeight: 'bold'}}>
                                <CardTitle style={{color: 'darkblue', height: '200px', justifyContent: 'center',
                                            background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'}}>React Project</CardTitle>
                                <CardText style={{fontSize: '16px', color: 'black'}}>
                                This React web application was a University of Houston group project created for a local business to manage their supply chain.
                                </CardText>
                                <CardActions border>
                                    <Navigation>
                                        {/* <Button href="/uhReactApp" colored>More Details</Button> */}
                                        <Link style={{fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: '16px', color: '#0d52d1', margin: '7px'}} to="/uhReactApp">MORE DETAILS</Link>
                                    </Navigation>
                                </CardActions>
                            </Card>

                            {/* React Native Project */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto',  fontFamily: 'Playfair Display', fontWeight: 'bold'}}>
                                <CardTitle style={{color: 'darkblue', height: '200px', justifyContent: 'center',
                                            background: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'}}>React Native Project</CardTitle>
                                <CardText style={{fontSize: '16px', color: 'black'}}>
                                This React Native mobile application is a time clock and allows educators to create logs for activities with students and family members.
                                </CardText>
                                <CardActions border>
                                    <Navigation>
                                        <Link style={{fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: '16px', color: '#0d52d1', margin: '7px'}} to="/projectClassApp">MORE DETAILS</Link>
                                    </Navigation>
                                </CardActions>
                            </Card>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;