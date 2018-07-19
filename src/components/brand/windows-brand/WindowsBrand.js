import React, {Component} from 'react';
import {Container} from './WindowsBrand.styled';
import Brand from "../Brand";
import WindowsIcon from "../../icon/windows-icon/WindowsIcon";

export default class WindowsBrand extends Component {
    render() {
        return (
            <Container>
                <Brand icon={<WindowsIcon/>} text="Windows Phone" {...this.props}/>
            </Container>
        )
    }
}
