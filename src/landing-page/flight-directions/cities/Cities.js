import React, {Component} from 'react';
import {Container} from './Cities.styled';
import Grid from "@material-ui/core/Grid/Grid";
import City from "./city/City";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";

export default class Cities extends Component {
    cities = [
        {
            id: 1,
            countryFlag: 'img/ru.png',
            countryName: 'Россия',
            cityName: 'Краснодар',
            findPriceFrom: 'Найти от 1 212 ₽',
            date: '18 марта',
            cover: 'img/krasnodar.png'
        },
        {
            id: 2,
            countryFlag: 'img/ru.png',
            countryName: 'Россия',
            cityName: 'Сочи (Адлер)',
            findPriceFrom: 'Найти от 1 334 ₽',
            date: '27 марта',
            cover: 'img/sochi.png'
        },
        {
            id: 3,
            countryFlag: 'img/ru.png',
            countryName: 'Россия',
            cityName: 'Санкт-Петербург',
            findPriceFrom: 'Найти от 1 508 ₽',
            date: '19 февраля',
            cover: 'img/spb.png'
        },
        {
            id: 4,
            countryFlag: 'img/ru.png',
            countryName: 'Россия',
            cityName: 'Минеральные воды',
            findPriceFrom: 'Найти от 2 074 ₽',
            date: '13 марта',
            cover: 'img/aquaminerale.png'
        },
        {
            id: 5,
            countryFlag: 'img/ru.png',
            countryName: 'Россия',
            cityName: 'Симферополь (Крым)',
            findPriceFrom: 'Найти от 2 407 ₽',
            date: '13 марта',
            cover: 'img/simpheropol.png'
        },
        {
            id: 6,
            countryFlag: 'img/ru.png',
            countryName: 'Испания',
            cityName: 'Барселона',
            findPriceFrom: 'Найти от 4 247 ₽',
            date: '24 марта',
            cover: 'img/barselona.png'
        },
    ];

    render() {
        return (
            <Container>
                <Grid item xs={9}>
                    <GridList cols={2} cellHeight={"auto"} spacing={20}>
                        {this.cities.map(city => (
                            <GridListTile key={city.id}>
                                <City city={city}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            </Container>
        )
    }
}
