import React, {Component} from 'react';
import {Body, Container, Description, DetailButtons, FireTime, Price, Title, TitleImg} from './Proposal.styled';
import Grid from "@material-ui/core/es/Grid/Grid";
import Button from "@material-ui/core/es/Button/Button";

export default class Proposal extends Component {
    render() {
        const proposal = this.props.proposal;
        return (
            <Container>
                <Title>
                    <Grid container justify={"space-between"}>
                        <div>
                            {proposal.title}
                        </div>
                        {proposal.titleImg && <TitleImg src={proposal.titleImg} alt=""/>}
                    </Grid>
                </Title>
                <Body>
                <Grid container justify={"space-between"}>
                    <div>
                        <img src={proposal.companyLogo} alt=""/>
                    </div>
                    <div>
                        <Grid container direction={"column"}>
                            <Price>
                                {proposal.price}
                            </Price>
                            <FireTime>
                                {proposal.fireTime}
                            </FireTime>
                        </Grid>
                    </div>
                </Grid>
                <Description>
                    {proposal.description}
                </Description>
                <DetailButtons>
                    <Button variant="outlined" color="secondary">
                        Узнать подробности
                    </Button>
                </DetailButtons>
                </Body>
            </Container>
        )
    }
}
