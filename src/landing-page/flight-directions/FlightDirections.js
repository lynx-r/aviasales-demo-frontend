import React, {Component} from 'react';
import {Container} from "./FlightDirections.styled";
import Cities from "./cities/Cities";
import FlightDirection from "./flight-direction/index";

export default class FlightDirections extends Component {
    render() {
        return (
            <Container>
                <FlightDirection/>
                <Cities/>
            </Container>
        )
    }
}
