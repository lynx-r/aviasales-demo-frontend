import React, {Component} from 'react';
import {Container, Disclaimer, FooterText} from './BestPricesFooter.styled';

export default class BestPricesFooter extends Component {
    render() {
        return (
            <Container>
                <FooterText>
                    Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира.
                    Поиск и сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
                </FooterText>
                <Disclaimer>
                    Цены, найденные пользователями за последние 48 часов, не являются офертой.
                </Disclaimer>
            </Container>
        )
    }
}
