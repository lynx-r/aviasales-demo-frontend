import React, {Component} from 'react';
import {Container, Count} from './BagIcon.styled';

export default class BagIcon extends Component {
    render() {
        return (
            <Container>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H19V20H0V0Z" fill="black" fillOpacity="0.01"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.47998 0C11.9409 0 13.9712 1.94678 14.3975 4.5H17.0679C18.168 4.5 18.978 5.39301 18.978 6.495V17.505C18.978 18.607 18.168 19.5 17.0679 19.5H1.96289C0.859863 19.5 0 18.607 0 17.505V6.495C0 5.39301 0.86377 4.5 1.96387 4.5H4.5625C4.98877 1.94678 7.01904 0 9.47998 0ZM5.47998 5.5H4.47998H1.96289C1.42578 5.5 1.00098 5.935 1.00098 6.495V17.505C1.00098 18.065 1.42578 18.5 1.96289 18.5H17.0669C17.585 18.5 17.9771 18.084 17.9771 17.505V6.495C17.9771 5.91499 17.5869 5.5 17.0669 5.5H14.48H13.48H5.47998ZM5.5791 4.5H13.3809C12.9756 2.48969 11.374 1 9.47998 1C7.58594 1 5.98438 2.48969 5.5791 4.5Z"
                          transform="translate(0.0200195 0.5)" fill="#9AB0B9"/>
                </svg>
                <Count>{this.props.count}</Count>
            </Container>
        )
    }
}
