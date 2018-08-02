import React, {Component} from 'react';
import {Container} from './SearchPage.styled';
import SearchBar from "./search-bar/SearchBar";
import SearchPanel from "./search-panel/SearchPanel";

export default class SearchPage extends Component {
    render() {
        return (
            <Container>
                <SearchBar/>
                <SearchPanel/>
            </Container>
        )
    }
}
