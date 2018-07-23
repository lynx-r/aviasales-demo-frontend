import React, {Component} from 'react';
import {Container} from './SearchBar.styled';
import ContainerCentrified from "../../components/container-centrified/ContainerCentrified";
import Grid from "@material-ui/core/es/Grid/Grid";
import {Logo} from "../../components/logo";
import Currency from "../../components/currency/Currency";
import SearchForm from "../../components/search-form/SearchForm";

export default class SearchBar extends Component {
    render() {
        return (
            <Container>
                <ContainerCentrified>
                    <Grid container direction={"column"} item xs={11} style={{marginTop: '12px'}}>
                        <Grid container justify={"space-between"}>
                            <Logo/>
                            <Currency/>
                        </Grid>
                        <SearchForm col={false}/>
                    </Grid>
                </ContainerCentrified>
            </Container>
        )
    }
}
