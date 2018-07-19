import React, {Component} from 'react';
import {BrandIcon, BrandName, Container} from './Brand.styled';
import Grid from "@material-ui/core/Grid/Grid";

export default class Brand extends Component {
    render() {
        return (
            <Container>
                <div className={this.props.className}>
                    <Grid container>
                        <BrandIcon>
                            {this.props.icon}
                        </BrandIcon>
                        <BrandName>
                            {this.props.text}
                        </BrandName>
                    </Grid>
                </div>
            </Container>
        )
    }
}
