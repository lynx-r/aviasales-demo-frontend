import React, {Component} from 'react';
import SocialIcon from "../social-icon/SocialIcon";

export default class FacebookIcon extends Component {
    render() {
        return (
            <SocialIcon src="img/social/facebook.png" alt="facebook" {...this.props} />
        )
    }
}
