import React, {Component} from 'react';
import {CityLocation, CityName, CityPrice, Container, CountryName, FromCity} from './CityPrices.styled';
import Grid from "@material-ui/core/Grid/Grid";
import "./CityPrices.css"

export default class CityPrices extends Component {
    render() {
        const city = this.props.city;
        return (
            <Container className={this.props.rightLine ? 'rightLine' : 'endLine'}>
                <CityLocation>
                    <Grid container direction={"row"}>
                        <div>
                            <img src={city.countryFlag} alt=""/>
                        </div>
                        <div>
                            <Grid container direction={"column"} justify={"center"} className="full-height">
                                <CityName>
                                    {city.cityName}
                                </CityName>
                                <CountryName>
                                    {city.countryName}
                                </CountryName>
                            </Grid>
                        </div>
                    </Grid>
                </CityLocation>
                <Grid container direction={"column"}>
                    {city.travelFrom.map(travelCity => (
                        <Grid container direction={"row"} key={travelCity.id} justify={"space-between"}>
                            <FromCity>
                                {travelCity.fromCity}
                            </FromCity>
                            <CityPrice>
                                {travelCity.price}
                            </CityPrice>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}
