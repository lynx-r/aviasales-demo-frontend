import React, {Component} from 'react';
import {CargoIcons, Charter, Container, TicketSite, Time} from './Ticket.styled';
import BagIcon from "../../../../components/icon/bag-icon/BagIcon";
import LuggageIcon from "../../../../components/icon/luggage-icon/LuggageIcon";
import Button from "@material-ui/core/es/Button/Button";
import Grid from "@material-ui/core/es/Grid/Grid";
import ContainerCentrified from "../../../../components/container-centrified/ContainerCentrified";
import RussiaAlIcon from "../../../../components/icon/russia-al-icon/RussiaAlIcon";
import "./Ticket.css";
import ExternalLinkIcon from "../../../../components/icon/external-link-icon/ExternalLinkIcon";
import PinIcon from "../../../../components/icon/pin-icon/PinIcon";

export default class Ticket extends Component {
    render() {
        const ticket = this.props.ticket;
        return (
            <Container>
                <Grid container direction={"row"}>
                    <Grid item xs={4} container direction={"column"} className="rightLine-light card">
                        <CargoIcons>
                            <ContainerCentrified>
                                <Grid container item xs={3} justify={"space-between"}>
                                    <BagIcon count={ticket.bagCount}/>
                                    <LuggageIcon count={ticket.luggageCount}/>
                                </Grid>
                            </ContainerCentrified>
                        </CargoIcons>
                        <Button className="button-primary">
                            Купить за <br/>{ticket.price}
                        </Button>
                        <TicketSite>
                            на {ticket.ticketSiteName}
                        </TicketSite>
                    </Grid>
                    <Grid item xs={8} container direction={"column"} justify={"space-between"} className="card">
                        <div>
                            <Grid container justify={"space-between"}>
                                <RussiaAlIcon width="99px" height="36px"/>
                                <div>
                                    <Grid container alignItems={"flex-start"}>
                                        <Charter/>
                                        <ExternalLinkIcon/>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                        <div>
                            <Grid container direction={"column"}>
                                <div>
                                    <Grid container alignItems={"center"}>
                                        <PinIcon/>
                                        <Time>
                                            00:05
                                        </Time>
                                    </Grid>
                                    Москва
                                    <div>
                                        24 фев 2018, Сб
                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
