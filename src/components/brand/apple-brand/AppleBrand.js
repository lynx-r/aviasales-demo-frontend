import React, {Component} from 'react';
import {Container} from './AppleBrand.styled';
import Brand from "../Brand";
import AppleIcon from "../../icon/apple-icon/AppleIcon";

export default class AppleBrand extends Component {
    render() {
        return (
            <Container>
                <Brand icon={<AppleIcon/>} text="iPhone или iPad" {...this.props}/>
            </Container>
        )
    }
}
