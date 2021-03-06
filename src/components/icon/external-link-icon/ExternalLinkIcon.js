import React, {Component} from 'react';
import {Container} from './ExternalLinkIcon.styled';

export default class ExternalLinkIcon extends Component {
    render() {
        return (
            <Container>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M10.2 13.073V9.24C5.474 9.24 2.363 10.728 0 14C0.952 9.328 3.587 4.672 10.2 3.727V0L17 6.528L10.2 13.073Z"
                          fill="#A0B0B9"/>
                </svg>
            </Container>
        )
    }
}
