import React, {Component} from 'react';
import './FlightDirections.css'
import Cities from "./cities/Cities";
import FlightDirection from "./flight-direction";

export default class FlightDirections extends Component {
    render() {
        return (
            <div>
                <FlightDirection/>
                <Cities/>
            </div>
        )
    }
}
