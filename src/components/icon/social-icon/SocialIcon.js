import React, {Component} from 'react';
import Icon from "../Icon";

export default class SocialIcon extends Component {
    render() {
        return (
            <Icon {...this.props} filled={true} width="36" height="36"/>
        )
    }
}
