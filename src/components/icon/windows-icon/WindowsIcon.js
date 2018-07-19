import React, {Component} from 'react';
import {Container} from './WindowsIcon.styled';

export default class WindowsIcon extends Component {
    render() {
        return (
            <Container>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M18 0V8.09521H8.18182V1.62061L18 0ZM7.36066 1.61914L0 2.52832L0.00683594 8.09521L7.36365 8.05762L7.36066 1.61914ZM7.36365 15.3809L7.35797 8.94824L0 8.90479L0.000610352 14.4653L7.36365 15.3809ZM8.18182 15.3906L17.9979 17L18 8.90479H8.18182V15.3906Z"
                          fill="white"/>
                </svg>
            </Container>
        )
    }
}
