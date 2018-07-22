import React, {Component} from 'react';
import {AllItems, Container, Item, Title} from './Column.styled';
import Grid from "@material-ui/core/Grid/Grid";

export default class Column extends Component {

    itemCounter = 0;

    render() {
        return (
            <Container>
                <Title>
                    {this.props.title}
                </Title>
                <Grid container direction={"column"}>
                    {this.props.list.map(item => (
                        <Item key={this.itemCounter++}>
                            {item}
                        </Item>
                    ))}
                </Grid>
                {this.props.viewAll &&
                <AllItems>
                    {this.props.viewAll}
                </AllItems>}
            </Container>
        )
    }
}
