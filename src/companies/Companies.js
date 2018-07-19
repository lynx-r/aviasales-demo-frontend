import React, {Component} from 'react';
import {
    ArrowLeft,
    ArrowRight,
    CandyStickLine,
    CompanyLogo,
    Container,
    Dot,
    Dots,
    StubCompaniesRow,
    Title
} from './Companies.styled';
import Grid from "@material-ui/core/Grid/Grid";

export default class Companies extends Component {
    render() {
        return (
            <Container>
                <Grid container direction={"column"} justify={"center"}>
                    <Title>
                        Дешевые авиабилеты от крупнейших авиакомпаний и агентств
                    </Title>
                    <Grid container direction={"column"} justify={"center"}>
                        <StubCompaniesRow>
                            <ArrowLeft src="img/companies/left-arrow.png" alt="left"/>
                            <CompanyLogo src="img/companies/airoflot.png" alt="left"/>
                            <CompanyLogo src="img/companies/airlines.png" alt="left"/>
                            <CompanyLogo src="img/companies/one-two-trip.png" alt="left"/>
                            <CompanyLogo src="img/companies/korean-air.png" alt="left"/>
                            <CompanyLogo src="img/companies/close-to-home.png" alt="left"/>
                            <ArrowRight src="img/companies/right-arrow.png" alt="left"/>
                        </StubCompaniesRow>
                        <Dots>
                            <Dot src="img/companies/dot-fill.png" alt=""/>
                            <Dot src="img/companies/dot-hollow.png" alt=""/>
                            <Dot src="img/companies/dot-hollow.png" alt=""/>
                        </Dots>
                    </Grid>
                </Grid>
                <CandyStickLine src="img/companies/candy-stick-line.png" alt=""/>
            </Container>
        )
    }
}
