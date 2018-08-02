import React, {Component} from 'react';
import Icon from "../Icon";

export default class RussiaAlIcon extends Component {
    render() {
        return (
            <Icon src="img/airlines/russia.png" alt="russia" filled={false} width={this.props.width}
                  height={this.props.height}/>
        )
    }
}
