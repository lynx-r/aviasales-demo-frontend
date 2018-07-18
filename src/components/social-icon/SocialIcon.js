import React, {Component} from 'react';
import {Container} from './SocialIcon.styled';

export default class SocialIcon extends Component {
    render() {
        return (
            <Container>
                <img src={this.props.src} alt={this.props.alt}/>
            </Container>
        )
    }
}
