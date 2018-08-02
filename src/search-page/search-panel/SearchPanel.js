import React, {Component} from 'react';
import {Container} from './SearchPanel.styled';
import Grid from "@material-ui/core/Grid/Grid";
import ContainerCentrified from "../../components/container-centrified/ContainerCentrified";
import Filters from "./filters/Filters";
import Tickets from "./tickets/Tickets";

export default class SearchPanel extends Component {
    render() {
        return (
            <Container>
                <ContainerCentrified>
                    <Grid container item xs={11} direction={"row"}>
                        <Filters/>
                        <Tickets/>
                    </Grid>
                </ContainerCentrified>
            </Container>
        )
    }
}
