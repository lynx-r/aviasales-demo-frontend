import React, {Component} from 'react';
import {Container} from './LandingPage.styled';
import Footer from "./footer/Footer";
import PreFooterAll from "./pre-footer-all/PreFooterAll";
import MobileApp from "./mobile-app/MobileApp";
import PreFooterInfo from "./pre-footer-info/PreFooterInfo";
import Discount from "./discount/Discount";
import Companies from "./companies/Companies";
import BestPrices from "./best-prices/BestPrices";
import FlightDirections from "./flight-directions/FlightDirections";
import Search from "./search";
import Grid from "@material-ui/core/Grid/Grid";

export default class LandingPage extends Component {
    render() {
        return (
            <Container>
                <Grid container>
                    <Search/>
                    <FlightDirections/>
                    <BestPrices/>
                    <Companies/>
                    <Discount/>
                    <PreFooterInfo/>
                    <MobileApp/>
                    <PreFooterAll/>
                    <Footer/>
                </Grid>
            </Container>
        )
    }
}
