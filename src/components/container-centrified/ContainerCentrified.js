import React, {Component} from 'react';
import './ContainerCentrified.css'

export default class ContainerCentrified extends Component {
    render() {
        return (
            <div className="component-ContainerCentrified">
                {this.props.children}
            </div>
        )
    }
}
