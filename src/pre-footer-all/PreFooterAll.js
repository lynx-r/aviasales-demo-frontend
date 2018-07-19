import React, {Component} from 'react';
import {Container} from './PreFooterAll.styled';
import Column from "./column/Column";
import Grid from "@material-ui/core/Grid/Grid";
import ContainerCentrified from "../components/container-centrified/ContainerCentrified";

export default class PreFooterAll extends Component {

    allDate = {
        countries: [
            'Россия',
            'Таиланд',
            'Черногория',
            'Кипр',
            'Болгария',
            'Грузия',
        ],
        cities: [
            'Москва',
            'Санкт-Петербург',
            'Симферополь',
            'Адлер',
            'Екатеринбург',
            'Лондон',
        ],
        airline: [
            'Air Berlin',
            'Air France',
            'Alitalia',
            'Air Baltic',
            'Emirates',
            'KLM',
        ],
        airports: [
            'Шереметьево',
            'Курумоч',
            'Домодедово',
            'Толмачево',
            'Владивосток',
            'Гамбург',
        ],
        directions: [
            'MOW – SIP',
            'MOW – AER',
            'MOW – TIV',
            'MOW – MRV',
            'LED – MOW',
            'MOW – BKK',
        ],
        services: [
            'Горящие авиабилеты',
            'Календарь низких цен',
            'Карта низких цен',
            'Спецпредложения',
            'Таблица цен',
            'Блог',
            'Помощь',
        ]
    };

    render() {
        return (
            <Container>
                <ContainerCentrified>
                    <Grid item xs={11}>
                        <Grid container justify={"space-between"}>
                            <Column title="СТРАНЫ" list={this.allDate.countries} viewAll="Все страны →"/>
                            <Column title="ГОРОДА" list={this.allDate.cities} viewAll="Все города →"/>
                            <Column title="АВИАКОМПАНИИ" list={this.allDate.airline} viewAll="Все авиакомпании →"/>
                            <Column title="АЭРОПОРТЫ" list={this.allDate.airports} viewAll="Все страны →"/>
                            <Column title="НАПРАВЛЕНИЯ" list={this.allDate.directions} viewAll=""/>
                            <Column title="СЕРВИСЫ" list={this.allDate.services} viewAll=""/>
                        </Grid>
                    </Grid>
                </ContainerCentrified>
            </Container>
        )
    }
}
