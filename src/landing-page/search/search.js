import React from "react";
import {Logo} from "../../components/logo/index";
import styled from 'styled-components';
import Grid from "@material-ui/core/Grid";
import ContainerCentrified from "../../components/container-centrified/ContainerCentrified";
import SearchForm from "../../components/search-form/SearchForm";
import "./Search.css";

const StyledSearch = styled.div`
    background: linear-gradient(119.26deg, #00B0DE -25.78%, #01AEDC -22.1%, 
    #02ABDB -18.38%, #02ABDB -14.68%, #02ABDB -14.46%, #196EBD 73.68%);
    height: 100vh;
    width: 100%;
`;

const Title = styled.h1`
    color: white;
    font-size: 40px;
    line-height: 48px;
    margin: 0;
`;

const Subtitle = styled.h2`
    color: white;
    line-height: normal;
`;

class Search extends React.Component {
    render() {
        return (
            <StyledSearch>
                <ContainerCentrified>
                    <Grid item xs={11} style={{marginTop: '40px'}}>
                        <Logo/>
                    </Grid>
                </ContainerCentrified>
                <Grid container
                      className="full-height search-form"
                      alignItems='center'
                      justify='center'
                      direction='column'
                >
                    <Title>Поиск дешевых авиабилетов</Title>
                    <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
                    <SearchForm col={true}/>
                </Grid>
            </StyledSearch>
        );
    }
}

export default Search;