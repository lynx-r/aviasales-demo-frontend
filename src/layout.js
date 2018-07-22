import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Search from "./landing-page/search";
import FlightDirections from "./landing-page/flight-directions/FlightDirections";
import BestPrices from "./landing-page/best-prices/BestPrices";
import Companies from "./landing-page/companies/Companies";
import Discount from "./landing-page/discount/Discount";
import PreFooterInfo from "./landing-page/pre-footer-info/PreFooterInfo";
import MobileApp from "./landing-page/mobile-app/MobileApp";
import PreFooterAll from "./landing-page/pre-footer-all/PreFooterAll";
import Footer from "./landing-page/footer/Footer";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

function CenteredGrid(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
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
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
