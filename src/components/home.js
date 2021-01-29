import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import MyImg from '../images/IMG_9143.jpeg';

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', height: 'auto', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                    
                        <img 
                        src={MyImg}
                        alt="avatar"
                        className="my-img"
                        />

                        <div className="banner-text">
                            <h1>Kevin Terwelp</h1>

                            <hr/>

                            <h2>University of Houston <br/> Computer Science Graduate</h2>
                            <h3>Graduation:  December 2020</h3>

                            <hr/>

                            <p>Bluehost | C++ | GitHub | Java | JavaScript | MySQL | PHP | Python | React | REST API | SVN | Swift</p>

                            <div className="social-links">

                                {/* GitHub */}
                                <a href="https://github.com/kterwelp" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/kevin-terwelp-11a571105/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;