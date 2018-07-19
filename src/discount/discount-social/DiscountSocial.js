import React, {Component} from 'react';
import {Container, Question, SubscribeInfo} from './DiscountSocial.styled';
import Grid from "@material-ui/core/Grid/Grid";
import FacebookIcon from "../../components/icon/facebook-icon/FacebookIcon";
import TwitterIcon from "../../components/icon/twitter-icon/TwitterIcon";
import VkIcon from "../../components/icon/vk-icon/VkIcon";
import RssIcon from "../../components/icon/rss-icon/RssIcon";
import Input from "@material-ui/core/Input/Input";
import "./DiscountSocial.css"
import Button from "@material-ui/core/Button/Button";

export default class DiscountSocial extends Component {
    render() {
        return (
            <Container>
                <Grid container direction={"row"}>
                    <Grid item xs={4} container direction={"column"}>
                        <Question>
                            Хотите знать всё о скидках на авиабилеты?
                        </Question>
                        <SubscribeInfo>
                            Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.
                        </SubscribeInfo>
                    </Grid>
                    <Grid item xs={3} container direction={"row"} justify={"flex-end"} alignItems={"center"}>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <VkIcon/>
                        <RssIcon/>
                    </Grid>
                    <Grid item xs={5}>
                        <Input
                            placeholder='Ваш email'
                            disableUnderline={true}
                            className="bootstrapInput"
                        />
                        <Button className="orangeButton">
                            Подписаться
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
