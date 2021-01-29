import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid> 
                <Cell col={2}>
                    <div style={{display: 'flex', fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.skill1} </div>
                </Cell>
                <Cell col={2}>
                    <div style={{display: 'flex', fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.years1} years</div>
                </Cell>
                <Cell col={2}>
                    <div style={{display: 'flex', fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.skill2} </div>
                </Cell>
                <Cell col={2}>
                    <div style={{display: 'flex', fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.years2} years</div>
                </Cell>
                <Cell col={2}>
                    <div style={{display: 'flex', fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.skill3} </div>
                </Cell>
                <Cell col={2}>
                    <div style={{display: 'flex', fontFamily: 'Playfair Display', fontSize: '20px'}}>{this.props.years3} years</div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;