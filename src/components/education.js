import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p style={{fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{margin: '0px', fontFamily: 'Playfair Display'}}>{this.props.degree}</h4>
                    <h4 style={{marginTop: '0px', fontFamily: 'Playfair Display'}}>{this.props.schoolName}</h4>
                    <ul style={{fontFamily: 'Playfair Display', fontSize: '17px'}}>
                        <li>{this.props.minor}</li>
                        <li>{this.props.gpa}</li>
                        <li>{this.props.honors}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Education;