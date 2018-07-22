import React, {Component} from 'react';
import {Container, Title} from './BestPricesTitle.styled';
import Calendar from "../../../components/calendar/Calendar";

export default class BestPricesTitle extends Component {
    render() {
        return (
            <Container>
                <Calendar/>
                <Title>
                    Лучшие цены на авиабилеты за последний месяц
                </Title>
            </Container>
        )
    }
}
