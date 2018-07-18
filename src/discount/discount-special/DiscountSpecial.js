import React, {Component} from 'react';
import {Container, Footer, SpecialDiscountBody, SpecialDiscountTitle} from './DiscountSpecial.styled';
import Grid from "@material-ui/core/es/Grid/Grid";
import ContainerCentrified from "../../components/container-centrified/ContainerCentrified";
import Proposal from "./proposal/Proposal";
import {AllProposals, Refinement} from "./proposal/Proposal.styled";

export default class DiscountSpecial extends Component {

    proposals = [
        {
            id: 1,
            title: 'Билеты от 499 рублей!',
            companyLogo: '/img/special/pobeda.png',
            price: 'от 499 ₽',
            fireTime: 'Осталось 45 дней',
            description: 'Билеты от 499 рублей! Специальное предложение от авиакомпании Победа'
        },
        {
            id: 2,
            title: 'В Нью-Йорк от 20680 рублей!',
            titleImg: 'img/special/img.png',
            companyLogo: '/img/special/lufthansa.png',
            price: 'от 20 680 ₽',
            fireTime: 'Осталось 19 дней',
            description: 'Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa'
        },
        {
            id: 3,
            title: 'В Лос-Анджелес от 22360 р...',
            titleImg: 'img/special/img.png',
            companyLogo: '/img/special/lufthansa.png',
            price: 'от 20 360 ₽',
            fireTime: 'Осталось 19 дней',
            description: 'Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa'
        },
    ];

    render() {
        return (
            <Container>
                <ContainerCentrified>
                    <Grid item xs={9}>
                        <SpecialDiscountTitle>
                            Спецпредложения на авиабилеты
                        </SpecialDiscountTitle>
                        <SpecialDiscountBody>
                            <Grid container justify={"space-between"}>
                                {this.proposals.map(proposal => (
                                    <div style={{width: (100 / this.proposals.length - 4) + '%'}} key={proposal.id}>
                                        <Proposal proposal={proposal}/>
                                    </div>
                                ))}
                            </Grid>
                        </SpecialDiscountBody>
                        <Footer>
                            <Grid container justify={"space-between"}>
                                <AllProposals>
                                    Смотреть все спецпредложения
                                </AllProposals>
                                <Refinement>
                                    * средняя цена по направлению
                                </Refinement>
                            </Grid>
                        </Footer>
                    </Grid>
                </ContainerCentrified>
            </Container>
        )
    }
}
