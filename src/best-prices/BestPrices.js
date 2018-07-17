import React, {Component} from 'react';
import {Container} from './BestPrices.styled';
import BestPricesTitle from "./best-prices-title/BestPricesTitle";
import CityPrices from "./city-prices/CityPrices";
import Grid from "@material-ui/core/es/Grid/Grid";
import BestPricesFooter from "./best-prices-footer/BestPricesFooter";

export default class BestPrices extends Component {

    cities = [
        {
            id: 1,
            countryFlag: '/img/ru.png',
            countryName: 'Крым',
            cityName: 'Симферополь',
            travelFrom: [
                {
                    id: 1,
                    fromCity: 'Из Москвы',
                    price: 'от 4 813 ₽'
                },
                {
                    id: 2,
                    fromCity: 'Из Санкт-Петербурга',
                    price: 'от 7 857 ₽'
                },
                {
                    id: 3,
                    fromCity: 'Из Новосибирска',
                    price: 'от 15 127 ₽'
                },
                {
                    id: 4,
                    fromCity: 'Из Екатеринбурга',
                    price: 'от 9 275 ₽'
                },
                {
                    id: 5,
                    fromCity: 'Из Челябенска',
                    price: 'от 9 148 ₽'
                },
            ]
        },
        {
            id: 2,
            countryFlag: '/img/am.png',
            countryName: 'Армения',
            cityName: 'Ереван',
            travelFrom: [
                {
                    id: 1,
                    fromCity: 'Из Москвы',
                    price: 'от 6 758 ₽'
                },
                {
                    id: 2,
                    fromCity: 'Из Санкт-Петербурга',
                    price: 'от 9 932 ₽'
                },
                {
                    id: 3,
                    fromCity: 'Из Сочи',
                    price: 'от 11 951 ₽'
                },
                {
                    id: 4,
                    fromCity: 'Из Краснодара',
                    price: 'от 11 741 ₽'
                },
                {
                    id: 5,
                    fromCity: 'Из Ростова-на-Дону',
                    price: 'от 11 956 ₽'
                },
            ]
        },
        {
            id: 3,
            countryFlag: '/img/md.png',
            countryName: 'Кишинёв',
            cityName: 'Молдавия',
            travelFrom: [
                {
                    id: 1,
                    fromCity: 'Из Москвы',
                    price: 'от 8 319 ₽'
                },
                {
                    id: 2,
                    fromCity: 'Из Санкт-Петербурга',
                    price: 'от 10 800 ₽'
                },
                {
                    id: 3,
                    fromCity: 'Из Краснодара',
                    price: 'от 12 098 ₽'
                },
                {
                    id: 4,
                    fromCity: 'Из Сургута',
                    price: 'от 16 227 ₽'
                },
                {
                    id: 5,
                    fromCity: 'Из Нового Уренгоя',
                    price: 'от 15 987 ₽'
                },
            ]
        }
    ];

    render() {
        return (
            <Container>
                <Grid container direction={"column"} justify={"space-between"} alignContent={"space-between"}
                      className={"full-height"}>
                    <BestPricesTitle/>
                    <Grid container justify={"center"}>
                        {this.cities.map((city, index) => (
                            <CityPrices city={city} rightLine={index !== this.cities.length - 1} key={city.id}/>
                        ))}
                    </Grid>
                    <BestPricesFooter/>
                </Grid>
            </Container>
        )
    }
}
