import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Coursework extends Component {
    render() {
        return(
            <Grid>
                <Cell col={6}>
                    <ul style={{margin: '0px', fontFamily: 'Playfair Display', fontSize: '18px'}}>
                        <li>{this.props.course1}</li>
                        <li>{this.props.course2}</li>
                        <li>{this.props.course3}</li>
                        <li>{this.props.course7}</li>
                    </ul>
                </Cell>
                <Cell col={6}>
                <ul style={{margin: '0px', fontFamily: 'Playfair Display', fontSize: '18px'}}>
                        <li>{this.props.course4}</li>
                        <li>{this.props.course5}</li>
                        <li>{this.props.course6}</li>
                        <li>{this.props.course8}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Coursework;