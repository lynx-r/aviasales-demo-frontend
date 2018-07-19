import React, {Component} from 'react';
import {Container} from './AppleIcon.styled';

export default class AppleIcon extends Component {
    render() {
        return (
            <Container>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.4 0C13.5428 1.28809 13.0226 2.58301 12.2496 3.5127C11.4777 4.44238 10.2118 5.16504 8.97223 5.06934C8.80157 3.80811 9.42926 2.48975 10.1436 1.6665C10.9418 0.737793 12.2869 0.0439453 13.4 0ZM17.4222 7.50146C17.3166 7.56592 15.0075 8.9043 15.0338 11.688C15.0632 15.0176 17.9664 16.127 18 16.1392C17.9743 16.2183 17.5355 17.7183 16.4691 19.2671C15.5475 20.6094 14.593 21.9443 13.0861 21.9717C12.3629 21.9849 11.8792 21.7769 11.3763 21.5601C10.8498 21.3335 10.3024 21.0981 9.43726 21.0981C8.53094 21.0981 7.95801 21.3408 7.40625 21.5747C6.92792 21.7773 6.46545 21.9731 5.81555 21.9985C4.36127 22.0537 3.25336 20.5498 2.3255 19.2148C0.427307 16.4834 -1.02393 11.4956 0.924744 8.12939C1.89203 6.45801 3.62128 5.39893 5.49701 5.37109C6.30682 5.35596 7.09039 5.66553 7.77649 5.93604C8.30109 6.14307 8.76868 6.32764 9.14752 6.32764C9.48083 6.32764 9.9165 6.15576 10.4308 5.95312C11.2455 5.63184 12.2574 5.23291 13.3727 5.31543C14.0861 5.36816 16.1107 5.58057 17.4222 7.50146Z"
                          fill="white"/>
                </svg>
            </Container>
        )
    }
}
