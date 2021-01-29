import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import MyImg from '../images/IMG_9143.jpeg';

class ContactMe extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Kevin Terwelp</h2>
                        <img 
                            src={MyImg}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '18px'}}>Please reach out to me by email if you would like a copy of my University of Houston transcript, resume or other documentation.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Playfair Display', fontWeight: 'bold'}}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        <a href="mailto: kterwelp@me.com" target="_blank" rel="noopener noreferrer">kterwelp@me.com</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ContactMe;