import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Search from "./search";
import FlightDirections from "./flight-directions/FlightDirections";
import BestPrices from "./best-prices/BestPrices";
import Companies from "./companies/Companies";
import Discount from "./discount/Discount";
import PreFooterInfo from "./pre-footer-info/PreFooterInfo";
import MobileApp from "./mobile-app/MobileApp";
import PreFooterAll from "./pre-footer-all/PreFooterAll";

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
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
