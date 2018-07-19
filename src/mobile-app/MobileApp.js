import React, {Component} from 'react';
import {Brands, Container, MobilePhone, MobileTitle, Rating, RatingDescription, RatingStars} from './MobileApp.styled';
import ContainerCentrified from "../components/container-centrified/ContainerCentrified";
import Grid from "@material-ui/core/Grid/Grid";
import StarIcon from "../components/icon/star-icon/StarIcon";
import AppleBrand from "../components/brand/apple-brand/AppleBrand";
import AndroidBrand from "../components/brand/android-brand/AndroidBrand";
import WindowsBrand from "../components/brand/windows-brand/WindowsBrand";

export default class MobileApp extends Component {

    appStoreData = {
        rating: 4.5,
        marksOver: '103 000'
    };

    render() {
        const starWidth = 10;
        return (
            <Container>
                <ContainerCentrified>
                    <Grid item xs={9}>
                        <Grid container justify={"space-between"} style={{height: '281px'}}>
                            <MobilePhone/>
                            <div>
                                <Grid container direction={"column"}>
                                    <MobileTitle>Скачай мобильное приложение Aviasales.ru</MobileTitle>
                                    <Rating>
                                        <Grid container>
                                            <RatingStars width={18 * this.appStoreData.rating}>
                                                <StarIcon width={starWidth} height={starWidth}/>
                                                <StarIcon width={starWidth} height={starWidth}/>
                                                <StarIcon width={starWidth} height={starWidth}/>
                                                <StarIcon width={starWidth} height={starWidth}/>
                                                <StarIcon width={starWidth} height={starWidth}/>
                                            </RatingStars>
                                            <RatingDescription>
                                                Более {this.appStoreData.marksOver} оценок
                                            </RatingDescription>
                                        </Grid>
                                    </Rating>
                                </Grid>
                                <Brands>
                                    <Grid container>
                                        <AppleBrand className="rightLine"/>
                                        <AndroidBrand className="rightLine marginLeft_12"/>
                                        <WindowsBrand className="marginLeft_12"/>
                                    </Grid>
                                </Brands>
                            </div>
                        </Grid>
                    </Grid>
                </ContainerCentrified>
            </Container>
        )
    }
}
