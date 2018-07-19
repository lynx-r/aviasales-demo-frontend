import React, {Component} from 'react';
import {Container} from './AndroidBrand.styled';
import Brand from "../Brand";
import AndroidIcon from "../../icon/android-icon/AndroidIcon";

export default class AndroidBrand extends Component {
    render() {
        return (
            <Container>
                <Brand icon={<AndroidIcon/>} text="Android" {...this.props}/>
            </Container>
        )
    }
}
