import React, {Component} from 'react';
import {Container, Count} from './LuggageIcon.styled';

export default class LuggageIcon extends Component {
    render() {
        return (
            <Container>
                <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.98975 0C5.42383 0 4.98486 0.447998 4.98486 1C4.98486 1.26608 5.09082 1.52119 5.2793 1.70888C5.46826 1.89656 5.72363 2.00133 5.98975 2L5.98682 5H1.96484C0.862793 5 0 5.89301 0 6.995V19.005C0 20.107 0.862793 21 1.96387 21H3.98389V22.001C3.9834 22.2664 4.08887 22.5212 4.27686 22.7087C4.46484 22.8962 4.71973 23.0011 4.98486 23C5.25049 23.0011 5.50537 22.8962 5.69385 22.7088C5.88184 22.5213 5.9873 22.2665 5.98682 22.001V21H10.9951V22.001C10.9946 22.2664 11.0996 22.5212 11.2876 22.7087C11.3755 22.7964 11.478 22.866 11.5894 22.9152C11.6362 22.9358 11.6846 22.9528 11.7339 22.966C11.7871 22.9803 11.8418 22.9902 11.897 22.9955C11.9297 22.9986 11.9629 23.0001 11.9961 23C12.2617 23.0011 12.5166 22.8962 12.7046 22.7088C12.8926 22.5213 12.998 22.2665 12.998 22.001V21H15.0869C16.188 21 17 20.107 17 19.005V6.995C17 5.89301 16.1899 5 15.0869 5H10.9951L10.9917 2C11.5439 2 11.9917 1.55229 11.9917 1C11.9917 0.447708 11.5439 0 10.9917 0H5.98975ZM9.99316 2H6.98779V5H9.99316V2ZM11.9951 20H4.98682V21L4.98389 22.001V20H1.96484C1.4248 20 1 19.566 1 19.005V6.995C1 6.435 1.42578 6 1.96484 6H15.0869C15.6079 6 16 6.41499 16 6.995V19.005C16 19.583 15.6069 20 15.0869 20H11.9951Z"
                          fill="#9AB0B9"/>
                </svg>
                <Count>{this.props.count}</Count>
            </Container>
        )
    }
}