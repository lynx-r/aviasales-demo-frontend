import React, {Component} from 'react';
import Icon from "../Icon";

export default class SocialIcon extends Component {
    render() {
        return (
            <Icon src={this.props.src} alt={this.props.alt} filled={true}/>
        )
    }
}
