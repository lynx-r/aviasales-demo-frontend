import React, {Component} from 'react';
import {CityCover, CityName, Container, CountryName, Date, FindPriceFrom} from './City.styled';
import Grid from "@material-ui/core/es/Grid/Grid";

export default class City extends Component {
    render() {
        const city = this.props.city;
        return (
            <Container>
                <Grid container>
                    <Grid container justify={"center"}>
                        <CityCover src={city.cover} alt={city.cityName} className={"img-responsive"}/>
                    </Grid>
                    <Grid container direction={"row"} justify={"space-between"}>
                        <div>
                            <Grid container direction={"row"} justify={"center"}>
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
                        </div>
                        <div>
                            <Grid container direction={"column"} justify={"center"} className="full-height">
                                <FindPriceFrom>
                                    {city.findPriceFrom}
                                </FindPriceFrom>
                                <Date>
                                    {city.date}
                                </Date>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
