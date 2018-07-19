import React, {Component} from 'react';
import Icon from "../Icon";

export default class StarIcon extends Component {
    render() {
        return (
            <Icon src="img/star.png" alt="star" filled={false} width={this.props.width} height={this.props.height}/>
        )
    }
}
