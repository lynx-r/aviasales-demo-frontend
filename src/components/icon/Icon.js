import React, {Component} from 'react';
import {Container} from './Icon.styled';

export default class Icon extends Component {
    render() {
        return (
            <Container filled={this.props.filled} width={this.props.width} height={this.props.height}>
                <img src={this.props.src} alt={this.props.alt}/>
            </Container>
        )
    }
}
