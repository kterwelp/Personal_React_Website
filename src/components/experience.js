import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {

    render() {
        console.log(this.props.jobDescription)
        return(
            <Grid>
                <Cell col={4}>
                    <p style={{fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{margin: '0px', fontFamily: 'Playfair Display'}}>{this.props.jobName1}</h4>
                    <h4 style={{margin: '0px', marginBottom: '10px', fontFamily: 'Playfair Display'}}>{this.props.jobName2}</h4>
                    <h5 style={{margin: '0px', fontFamily: 'Playfair Display'}}>{this.props.employer}</h5>
                    <h5 style={{margin: '0px', fontFamily: 'Playfair Display'}}>{this.props.employerLoc}</h5>
                    <ul style={{fontFamily: 'Playfair Display', fontSize: '17px'}}>
                        {this.props.jobDescription.map((item, index) => {
                            return <li key={`item-${ index }`}>{ item }</li>;
                        })}
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;