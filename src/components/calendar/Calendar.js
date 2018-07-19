import React, {Component} from 'react';
import {Container} from './Calendar.styled';

export default class Calendar extends Component {
    render() {
        return (
            <Container>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30Z"
                          fill="#E2F8FF"/>
                    <path d="M0 0H28V16.005C28 17.107 27.1 18 26.009 18H1.99C0.891 18 0 17.107 0 16.005V0Z"
                          transform="translate(16 26)" fill="#93E5FF"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1.99103 0C0.900024 0 0 0.897949 0 2.0061V7H28V2.0061C28 0.886963 27.109 0 26.01 0H1.99103ZM11.943 19.582L14 18.5L16.057 19.582C16.543 19.8369 16.864 19.605 16.771 19.063L16.378 16.7729L18.042 15.1499C18.435 14.7668 18.314 14.3909 17.769 14.312L15.469 13.9768L14.441 11.8928C14.199 11.4019 13.803 11.3999 13.559 11.8928L12.531 13.9768L10.231 14.312C9.68799 14.3899 9.56403 14.7659 9.95801 15.1499L11.622 16.7729L11.229 19.063C11.137 19.604 11.456 19.8379 11.943 19.582Z"
                          transform="translate(16 18)" fill="#00C2FF"/>
                    <path
                        d="M0 1C0 0.447715 0.447715 0 1 0H2C2.55228 0 3 0.447715 3 1V3C3 3.55228 2.55228 4 2 4H1C0.447715 4 0 3.55228 0 3V1Z"
                        transform="translate(21 16)" fill="#00C2FF"/>
                    <path
                        d="M0 1C0 0.447715 0.447715 0 1 0H2C2.55228 0 3 0.447715 3 1V3C3 3.55228 2.55228 4 2 4H1C0.447715 4 0 3.55228 0 3V1Z"
                        transform="translate(36 16)" fill="#00C2FF"/>
                </svg>
            </Container>
        )
    }
}