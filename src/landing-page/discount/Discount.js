import React, {Component} from 'react';
import {Container} from './Discount.styled';
import DiscountSocial from "./discount-social/DiscountSocial";
import DiscountSpecial from "./discount-special/DiscountSpecial";
import Grid from "@material-ui/core/Grid/Grid";

export default class Discount extends Component {
    render() {
        return (
            <Container>
                <Grid container>
                    <Container>
                        <Grid item xs={9}>
                            <DiscountSocial/>
                        </Grid>
                    </Container>
                    <DiscountSpecial/>
                </Grid>
            </Container>
        )
    }
}
