import React, {Component} from 'react';
import {Container} from './Tickets.styled';
import Ticket from "./ticket/Ticket";

export default class Tickets extends Component {

    tickets = [
        {
            id: 1,
            price: '7 772₽',
            bagCount: 5,
            luggageCount: 15,
            ticketSiteName: 'Clickavia',
            ticketSiteHref: 'http://clickavia.ru'
        }
    ];

    render() {
        return (
            <Container>
                {this.tickets.map(ticket => (<Ticket ticket={ticket} key={ticket.id}/>))}
            </Container>
        )
    }
}
